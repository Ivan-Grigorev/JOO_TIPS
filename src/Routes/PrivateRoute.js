import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/auth-selectors";

export default function PrivateRoute({ component: Component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const shouldRedirect = !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
