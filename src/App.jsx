import { Suspense, lazy, memo, useEffect } from "react";
import ToastContainer from "./Components/Toast/ToastContainer";

import "./scss/global.scss"; // do not delete
import { refreshUser } from "./redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing, selectLoadingStatus } from "./redux/selectors";

import "react-toastify/dist/ReactToastify.css";
import RoutesConfig from "./Routes/RoutesConfig";

const ChakraSpinner = lazy(() => import("./Components/ChakraUI/Spinner/Spinner")); // prettier-ignore
const CookieBanner = lazy(() => import("./Components/Cookie/Cookie"));

const App = memo(() => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector(selectLoadingStatus);
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <ChakraSpinner />
  ) : (
    <>
      <Suspense fallback={<ChakraSpinner />}>
        <RoutesConfig />

        {isLoading && <ChakraSpinner />}

        <ToastContainer />

        <CookieBanner />
      </Suspense>
    </>
  );
});

export default App;
