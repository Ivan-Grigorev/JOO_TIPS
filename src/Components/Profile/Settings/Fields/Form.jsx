// Importing necessary components and hooks from Chakra UI, React, and Redux.
import {
  FormControl,
  FormLabel,
  Input,
  Switch,
  Text,
  Select,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Importing selectors and operations from the auth section of Redux.
import {
  selectUserEmail,
  selectUserErrors,
  selectUserName,
  selectUserPhone,
  selectUserProfileInfo,
  selectUserUsername,
} from "../../../../redux/auth/auth-selectors";
import { updateUserProfile } from "../../../../redux/auth/auth-operations";

// Importing styles and external libraries.
import "./Form.scss";
import { toast } from "react-toastify";
import { debounce } from "lodash";

// Declaring the Form component.
const Form = () => {
  // Hooking into the Redux store.
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfileInfo);
  const userPhone = useSelector(selectUserPhone);
  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserUsername);
  const errors = useSelector(selectUserErrors).profile;

  // Declaring states for form fields with initial values.
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [language, setLanguage] = useState("");
  const [notifications, setNotifications] = useState(false);

  // Updating the notifications and language states when the userProfile is updated.
  useEffect(() => {
    if (userProfile.notifications && userProfile.interfaceLanguage) {
      setNotifications(userProfile.notifications);
      setLanguage(userProfile.interfaceLanguage);
    }
  }, [userProfile]);

  // Showing or hiding error messages based on the length of errors.
  useEffect(() => {
    const messages = document.querySelector(".profile-hero .message");
    const show = () => (messages.style.opacity = 1);
    const hide = () => (messages.style.opacity = 0);
    errors.length > 0 ? show() : hide();
  });

  // Declaring a debounced function to dispatch the updateUserProfile action.
  const debouncedSubmit = debounce((sentData) => {
    dispatch(updateUserProfile(sentData));
    handleReset();
  }, 500);

  const handleChange = (event) => {
    const handlers = {
      phone: setPhone,
      email: setEmail,
      username: setUsername,
      about: setAbout,
      language: setLanguage,
      notifications: setNotifications,
    };

    const { name, value, checked } = event.target;
    const handler = handlers[name];

    if (handler) {
      handler(name === "notifications" ? checked : value);
    }
  };

  // Функция для проверки изменилось ли значение
  const isChanged = (newValue, originalValue) => {
    if (newValue && newValue !== originalValue && newValue.toString().trim()) {
      return newValue;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataFields = {
      phone: isChanged(phone, userPhone),
      email: isChanged(email, userEmail),
      profile: {
        username: isChanged(username, userName),
        about: isChanged(about, userProfile.about),
        interfaceLanguage: language,
        notifications: notifications,
      },
    };

    // Отфильтровываем неверные или неизмененные поля
    const sentData = Object.fromEntries(
      Object.entries(dataFields).filter(([_, value]) => value)
    );

    if (Object.keys(sentData).length === 0) {
      return toast.warning("No changes detected or form is empty!");
    }

    debouncedSubmit(sentData);
  };

  // Handling the form reset event.
  const handleReset = () => {
    // Resetting the states to the initial data.
    setPhone("");
    setEmail("");
    setUsername("");
    setAbout("");
    setLanguage(userProfile.interfaceLanguage || "");
    setNotifications(userProfile.notifications || false);
  };

  // Rendering the form.

  return (
    <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
      <Text fontWeight="400">{userPhone || "There'd be your phone phone"}</Text>
      <Input
        value={phone} // Use the corresponding state
        name="phone"
        type="number"
        onChange={handleChange} // Use the shared handler
        placeholder="Tap to change phone"
        autoComplete="off"
        size="sm"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
        _hover={{
          borderBottomColor: "blue.500",
        }}
        _focus={{
          borderBottomColor: "blue.500",
        }}
        _focusVisible={{
          borderBottomColor: "blue.500",
        }}
      />

      <Text fontWeight="400">{userEmail}</Text>
      <Input
        value={email} // Use the corresponding state
        name="email"
        onChange={handleChange} // Use the shared handler
        placeholder="Tap to change e-mail"
        size="sm"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
        _hover={{
          borderBottomColor: "blue.500",
        }}
        _focus={{
          borderBottomColor: "blue.500",
        }}
        _focusVisible={{
          borderBottomColor: "blue.500",
        }}
      />

      <Text fontWeight="400">
        @{userProfile.username || "There'd be your username"}
      </Text>
      <Input
        value={username}
        name="username"
        autoComplete="off"
        onChange={handleChange}
        placeholder="Tap to change username"
        size="sm"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
        _hover={{
          borderBottomColor: "blue.500",
        }}
        _focus={{
          borderBottomColor: "blue.500",
        }}
        _focusVisible={{
          borderBottomColor: "blue.500",
        }}
      />

      <Text fontWeight="400">
        {userProfile.about || "You'll be a great programmer!"}
      </Text>
      <Input
        value={about}
        name="about"
        autoComplete="off"
        onChange={handleChange}
        placeholder="Tap to change about section"
        size="sm"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
        _hover={{
          borderBottomColor: "blue.500",
        }}
        _focus={{
          borderBottomColor: "blue.500",
        }}
        _focusVisible={{
          borderBottomColor: "blue.500",
        }}
      />

      <Select
        placeholder={userProfile.interfaceLanguage}
        onChange={handleChange}
        value={language}
        name="language"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
      >
        <option value="Ukrainian">Ukrainian</option>
        <option value="English">English</option>
        <option value="Polish">Polish</option>
        <option value="France">France</option>
      </Select>

      <FormControl
        display="flex"
        alignItems="center"
        className="notification-radio-group"
      >
        <FormLabel htmlFor="notifications" mb="0">
          Enable notifications?
        </FormLabel>
        <Switch
          name="notifications"
          size="lg"
          onChange={handleChange}
          isChecked={notifications}
        />
      </FormControl>

      <div className="message">
        {errors.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      <div className="settings-buttons">
        <ChakraButton colorScheme="green" type="submit">
          Зберегти
        </ChakraButton>

        <ChakraButton colorScheme="red" type="reset">
          Скасувати
        </ChakraButton>
      </div>
    </form>
  );
};

export default Form;
