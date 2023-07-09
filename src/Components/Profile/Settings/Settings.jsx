import { Button as ChakraButton } from "@chakra-ui/react";
import "./Settings.scss";
import BackButton from "./BackButton/BackButton";
import UpdateAvatar from "./UpdateAvatar/UpdateAvatar";
import Fields from "./Fields/Fields";

const Settings = () => {
  return (
    <>
      <BackButton currentSectionName="Settings" />

      <UpdateAvatar />

      <Fields />

      <div className="settings-buttons">
        <ChakraButton colorScheme="green">Зберегти</ChakraButton>

        <ChakraButton colorScheme="red">Скасувати</ChakraButton>
      </div>
    </>
  );
};

export default Settings;
