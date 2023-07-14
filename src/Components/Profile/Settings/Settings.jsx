import "./Settings.scss";
import BackButton from "./BackButton/BackButton";
import UpdateAvatar from "./UpdateAvatar/UpdateAvatar";
import Form from "./Fields/Form";
import { useLocation } from "react-router-dom";

const Settings = () => {
  const backLink = useLocation().state?.from ?? "/";

  return (
    <>
      <BackButton currentSectionName="Settings" backLink={backLink} />

      <UpdateAvatar />

      <Form />
    </>
  );
};

export default Settings;
