import { useNavigate } from "react-router-dom";

// This component is used to display a message to the user after they have successfully changed their password
const PasswordHasBeenChanged = () => {
  // The useNavigate hook provides easy navigation between the routes in a React Router application
  const navigate = useNavigate();

  // Using setTimeout to navigate the user to the signup page after 5 seconds
  setTimeout(() => navigate("/signup"), 5000);

  return (
    <>
      <div className="pass-has-been-changed">
        <h1>Your password has been changed.</h1>
        <h2>Now you may use it for log in.</h2>
        <h3>You will be navigated to authpage in 5 seconds.</h3>
      </div>
    </>
  );
};

export default PasswordHasBeenChanged;
