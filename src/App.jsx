import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";

import Layout from "./Pages/Layout/Layout";
import "./scss/global.scss"; // do not delete
import RestrictedRoute from "./Routes/RestrictedRoute";
import { refreshUser } from "./redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing, selectLoadingStatus } from "./redux/selectors";
import ChakraSpinner from "./Components/ChakraUI/Spinner/Spinner";
import { selectIsLoggedIn } from "./redux/auth/auth-selectors";

const InDev = lazy(() => import("./Pages/InDev/InDev"));
const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const AuthPage = lazy(() => import("./Pages/AuthPage/AuthPage"));

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoadingStatus);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    isLoggedIn && dispatch(refreshUser());
  }, [isLoggedIn, dispatch]);

  return isRefreshing ? (
    <ChakraSpinner />
  ) : (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>

        <Route
          path="signup"
          element={<RestrictedRoute redirectTo="/" component={<AuthPage />} />}
        />

        <Route path="*" element={<InDev />} />
      </Routes>

      {isLoading && <ChakraSpinner />}
    </>
  );
};

export default App;
