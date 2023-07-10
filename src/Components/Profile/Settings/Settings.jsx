import "./Settings.scss";
import BackButton from "./BackButton/BackButton";
import UpdateAvatar from "./UpdateAvatar/UpdateAvatar";
import Form from "./Fields/Form";

const Settings = () => {
  return (
    <>
      <BackButton currentSectionName="Settings" />

      <UpdateAvatar />

      <Form />
    </>
  );
};

export default Settings;
