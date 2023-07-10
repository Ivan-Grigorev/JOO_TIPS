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
  selectUserProfileInfo,
} from "../../../../redux/auth/auth-selectors";
import "./Form.scss";

const Form = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfileInfo);
  const userPhone = useSelector(selectUserPhone);
  const userEmail = useSelector(selectUserEmail);

  // Измените эти начальные значения состояния на данные из Redux store
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [avatarName, setAvatarName] = useState("");
  const [about, setAbout] = useState("");
  const [language, setLanguage] = useState(userProfile.interfaceLanguage || "");
  const [notifications, setNotifications] = useState(
    userProfile.notifications || true
  );

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    switch (name) {
      case "number":
        setNumber(value);
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
        setNotifications(checked); // Switch возвращает checked, а не value
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch();
  };

  const handleReset = () => {
    // Здесь мы просто восстанавливаем значения состояния обратно к начальным данным
    setNumber("");
    setEmail("");
    setAvatarName("");
    setAbout("");
    setLanguage(userProfile.interfaceLanguage || "");
    setNotifications(userProfile.notifications || false);
  };

  return (
    <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
      <Text fontWeight="400">
        {userPhone || "There'd be your phone number"}
      </Text>
      <Input
        value={number} // Use the corresponding state
        name="number"
        onChange={handleChange} // Use the shared handler
        placeholder="Tap to change number"
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

      {/* <Text fontWeight="400">{userProfile.interfaceLanguage}</Text> */}
      <Select
        placeholder={userProfile.interfaceLanguage}
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
      >
        <option value="Ukrainian">Ukrainian</option>
        <option value="English">English</option>
        <option value="Poland">Poland</option>
        <option value="France">France</option>
      </Select>

      <FormControl display="flex" alignItems="center" className="notification-radio-group">
        <FormLabel htmlFor="notifications" mb="0">
          Enable notifications?
        </FormLabel>
        <Switch id="notifications" size="lg" />
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
