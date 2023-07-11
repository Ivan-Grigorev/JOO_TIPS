import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";

import Layout from "./Pages/Layout/Layout";
import "./scss/global.scss"; // do not delete
import RestrictedRoute from "./Routes/RestrictedRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import { refreshUser } from "./redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing, selectLoadingStatus } from "./redux/selectors";
import ChakraSpinner from "./Components/ChakraUI/Spinner/Spinner";

import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InDev = lazy(() => import("./Pages/InDev/InDev"));
const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const AuthPage = lazy(() => import("./Pages/AuthPage/AuthPage"));
const NotFound = lazy(() => import("./Components/Errors/404"));
const ProfileLayout = lazy(() => import("./Components/Profile/Layout/Layout"));
const Profile = lazy(() => import("./Components/Profile/Profile"));
const Settings = lazy(() => import("./Components/Profile/Settings/Settings"));

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoadingStatus);
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <ChakraSpinner />
  ) : (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>

        <Route path="/profile" element={<ProfileLayout />}>
          <Route
            index
            element={<PrivateRoute redirectTo="/" component={<Profile />} />}
          />
          <Route
            path="/profile/settings"
            element={<PrivateRoute redirectTo="/" component={<Settings />} />}
          />
        </Route>

        <Route
          path="signup"
          element={<RestrictedRoute redirectTo="/" component={<AuthPage />} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {isLoading && <ChakraSpinner />}

      <ToastContainer
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

export default App;
