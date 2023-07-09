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
    </>
  );
};

export default Settings;
