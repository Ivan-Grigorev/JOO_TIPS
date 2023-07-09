import "./Fields.scss";
import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const Fields = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <div className="fields">
      <Text fontWeight="700">+380 (50) 111 11 11</Text>
      <Input
        value={value}
        name="number"
        onChange={handleChange}
        placeholder="Tap to change number"
        size="sm"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
      />

      <Text fontWeight="700">joker@gmail.com</Text>
      <Input
        value={value}
        name="email"
        onChange={handleChange}
        placeholder="Tap to change e-mail"
        size="sm"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
      />

      <Text fontWeight="700">@Frog_frog</Text>
      <Input
        value={value}
        name="avatarName"
        onChange={handleChange}
        placeholder="Tap to change avatar name"
        size="sm"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
      />

      <Text fontWeight="700">I'll be a genius programmer</Text>
      <Input
        value={value}
        name="about"
        onChange={handleChange}
        placeholder="Tap to change about section"
        size="sm"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
      />

      <Text fontWeight="700">English</Text>
      <Input
        value={value}
        name="language"
        onChange={handleChange}
        placeholder="Tap to change language"
        size="sm"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
      />
      <Text fontWeight="700">Sound and vibration</Text>
      <Input
        value={value}
        name="notifications"
        onChange={handleChange}
        placeholder="Tap to change setting"
        size="sm"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderBottom="1px solid"
        borderColor="gray.500"
      />
    </div>
  );
};

export default Fields;
