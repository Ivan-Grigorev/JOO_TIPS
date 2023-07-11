import {
  FormControl,
  FormLabel,
  Input,
  Switch,
  Text,
  Textarea,
  Select,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserPhone,
  selectUserProfile,
  selectUserProfileInfo,
} from "../../../../redux/auth/auth-selectors";
import "./Form.scss";
import { updateUserProfile } from "../../../../redux/auth/auth-operations";

const Form = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfileInfo);
  const userPhone = useSelector(selectUserPhone);
  const userEmail = useSelector(selectUserEmail);

  // Измените эти начальные значения состояния на данные из Redux store
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [avatarName, setAvatarName] = useState("");
  const [about, setAbout] = useState("");
  const [language, setLanguage] = useState("");
  const [notifications, setNotifications] = useState(false);

  useEffect(() => {
    if (userProfile.notifications) {
      setNotifications(userProfile.notifications);
    }
  }, [userProfile]);

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
        setNotifications(checked); // Используйте checked вместо !notifications
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const sentData = {
      phone: phone.trim().length === 0 ? userPhone : phone,
      email: email.trim().length === 0 ? userEmail : phone,
      profile: {
        avatarName: avatarName.trim().length === 0 ? userProfile.avatarName : avatarName, // prettier-ignore
        about: about.trim().length === 0 ? userProfile.about : about,
        interfaceLanguage: language.trim().length === 0 ? userProfile.interfaceLanguage : language, // prettier-ignore
        notifications: notifications ?? userProfile.notifications,
      },
    };

    const emptyForm =
      phone.trim().length === 0 &&
      email.trim().length === 0 &&
      avatarName.trim().length === 0 &&
      about.trim().length === 0 &&
      language === userProfile.interfaceLanguage &&
      notifications === userProfile.notifications;

    console.group("Form check");
    console.log("phone.trim().length === 0 &&", phone.trim().length === 0);
    console.log("email.trim().length === 0 &&", email.trim().length === 0);
    console.log("avatarName.trim().length === 0 &&",  avatarName.trim().length === 0 ); // prettier-ignore
    console.log("about.trim().length === 0 &&", about.trim().length === 0);
    console.log("language === userProfile.interfaceLanguage", language === userProfile.interfaceLanguage); // prettier-ignore
    console.log("language", language);
    console.log("userProfile.interfaceLanguage", userProfile.interfaceLanguage);
    console.log("notifications === userProfile.notifications", notifications === userProfile.notifications); // prettier-ignore
    console.log("notifications", notifications);
    console.log("userProfile.notifications", userProfile.notifications);
    console.groupEnd();

    console.log("emptyForm", emptyForm);
    if (emptyForm)return alert("Please fill at least one field before submitting!"); // prettier-ignore

    dispatch(updateUserProfile(sentData));
    handleReset();
  };

  const handleReset = () => {
    // Здесь мы просто восстанавливаем значения состояния обратно к начальным данным
    setPhone("");
    setEmail("");
    setAvatarName("");
    setAbout("");
    setLanguage(userProfile.interfaceLanguage || "");
    setNotifications(userProfile.notifications || false);
  };

  return (
    <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
      <Text fontWeight="400">{userPhone || "There'd be your phone phone"}</Text>
      <Input
        value={phone} // Use the corresponding state
        name="phone"
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