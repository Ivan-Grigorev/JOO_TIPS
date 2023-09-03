import { Flip, ToastContainer as ToastifyContainer } from "react-toastify";

const ToastContainer = () => {
  return (
    <>
      <ToastifyContainer
        position="top-right"
        transition={Flip}
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={3}
      />
    </>
  );
};

export default ToastContainer;
