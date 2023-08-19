import { lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";
import Swipe from "../Components/Profile/Layout/Swipe/Swipe";
import Lessons from "../Components/Profile/EducationContent/Lessons/Lessons";
import Competition from "../Components/Profile/EducationContent/Competition/Competition";
import Results from "../Components/Profile/EducationContent/Results/Results";
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const RestrictedRoute = lazy(() => import("./RestrictedRoute"));

const Layout = lazy(() => import("../Pages/Layout/Layout"));
const Homepage = lazy(() => import("../Pages/Homepage/Homepage"));
const AuthPage = lazy(() => import("../Pages/AuthPage/AuthPage"));
const NotFound = lazy(() => import("../Components/Errors/404"));
const ProfileLayout = lazy(() => import("../Components/Profile/Layout/Layout"));
const Profile = lazy(() => import("../Components/Profile/Profile"));
const Settings = lazy(() => import("../Components/Profile/Settings/Settings"));
const RecoveringPassword = lazy(() =>
  import("../Pages/RecoveringPassword/RecoveringPassword")
);
const SetNewPassword = lazy(() =>
  import("../Pages/RecoveringPassword/SetNewPassword/SetNewPassword")
);
const ChangePassword = lazy(() =>
  import("../Pages/ChangePassword/ChangePassword")
);
const Languages = lazy(() => import("../Components/Languages/Languages"));

const RoutesConfig = () => {
  return (
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

        <Route
          path="signup/recover-password"
          element={<RecoveringPassword />}
        />
        <Route
          path="signup/recover-password/:token"
          element={<SetNewPassword />}
        />

        <Route path="profile/change-password" element={<ChangePassword />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/education" element={<ProfileLayout />}>
          <Route path="achievements" element={<Swipe />} />
          <Route path="topics" element={<Swipe />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="competitions" element={<Competition />} />
          <Route path="results" element={<Results />} />
        </Route>

        <Route path="/languages">
          <Route path="choose" element={<Languages />} />
        </Route>
      </Routes>
    </>
  );
};

export default memo(RoutesConfig);
