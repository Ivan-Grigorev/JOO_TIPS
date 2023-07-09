import "./Fields.scss";
import { Input, Text } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserPhone,
  selectUserProfileInfo,
} from "../../../../redux/auth/auth-selectors";

const Fields = () => {
  // const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfileInfo);
  const userPhone = useSelector(selectUserPhone);
  const userEmail = useSelector(selectUserEmail);
  const userNotifications = userProfile.notifications
    ? "Notifications enabled"
    : "Notifications disabled";
  // Define the state for each input field
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [avatarName, setAvatarName] = useState("");
  const [about, setAbout] = useState("");
  const [language, setLanguage] = useState("");
  const [notifications, setNotifications] = useState("");

  // Define a single onChange handler
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the correct state based on the input field
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
        setNotifications(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="fields">
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

      <Text fontWeight="400">{userProfile.interfaceLanguage}</Text>
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

      <Text fontWeight="400">{language}</Text>
      <Select
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
      >
        <option value="enable">Enable</option>
        <option value="disable">Disable</option>
      </Select>
    </div>
  );
};

export default Fields;
