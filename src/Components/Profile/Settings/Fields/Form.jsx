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
  selectUserAvatarName,
  selectUserEmail,
  selectUserErrors,
  selectUserPhone,
  selectUserProfileInfo,
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
  const userAvatarname = useSelector(selectUserAvatarName);
  const errors = useSelector(selectUserErrors).profile;

  // Declaring states for form fields with initial values.
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [avatarName, setAvatarName] = useState("");
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

  // Handling changes to the form fields and updating the corresponding states.
  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    switch (name) {
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "avatarName":
        setAvatarName(value);
        break;
      case "about":
        setAbout(value);
        break;
      case "language":
        setLanguage(value);
        break;
      case "notifications":
        setNotifications(checked);
        break;
      default:
        break;
    }
  };

  // Declaring a debounced function to dispatch the updateUserProfile action.
  const debouncedSubmit = debounce((sentData) => {
    dispatch(updateUserProfile(sentData));
    handleReset();
  }, 500);

  // Handling the form submission event.
  const handleSubmit = (event) => {
    event.preventDefault();

    // Preparing the data to be sent.
    const sentData = {
      phone: phone.trim().length === 0 ? userPhone : phone,
      email: email.trim().length === 0 ? userEmail : email,
      profile: {
        avatarName:
          avatarName.trim().length === 0 ? userProfile.avatarName : avatarName,
        about: about.trim().length === 0 ? userProfile.about : about,
        interfaceLanguage:
          language.trim().length === 0
            ? userProfile.interfaceLanguage
            : language,
        notifications: notifications ?? userProfile.notifications,
      },
    };

    // Checking if the form is empty or no changes are made.
    const emptyForm =
      phone.trim().length === 0 &&
      email.trim().length === 0 &&
      avatarName.trim().length === 0 &&
      about.trim().length === 0 &&
      language === userProfile.interfaceLanguage &&
      notifications === userProfile.notifications;

    const noChanges =
      phone.trim() === userPhone ||
      email.trim() === userEmail ||
      avatarName.trim() === userAvatarname ||
      about.trim() === userProfile.about;

    if (noChanges)
      return toast.warning("You've entered identical data with those already on the server." ); // prettier-ignore

    if (emptyForm)
      return toast.warning("Please fill at least one field before submitting!");

    debouncedSubmit(sentData); // Calling the debounced function.
  };

  // Handling the form reset event.
  const handleReset = () => {
    // Resetting the states to the initial data.
    setPhone("");
    setEmail("");
    setAvatarName("");
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

      {/* Similar changes for the other input fields... */}
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
        @{userProfile.avatarName || "There'd be your avatar name"}
      </Text>
      <Input
        value={avatarName}
        name="avatarName"
        autoComplete="off"
        onChange={handleChange}
        placeholder="Tap to change avatar name"
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

      {/* ЗАМЕНИТЬ НА TEXTAREA */}
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
