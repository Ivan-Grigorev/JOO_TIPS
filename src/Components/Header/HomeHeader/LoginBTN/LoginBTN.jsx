const LoginBTN = ({isHidden}) => {
  return (
    <>
      <button className={`btn-login ${isHidden}`}>LOG IN</button>
    </>
  );
};

export default LoginBTN;
