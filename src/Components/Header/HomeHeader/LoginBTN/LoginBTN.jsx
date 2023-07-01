const LoginBTN = ({isHidden}) => {
  return (
    <>
      <button className={`btn-login ${isHidden}`}>Вхiд</button>
    </>
  );
};

export default LoginBTN;
