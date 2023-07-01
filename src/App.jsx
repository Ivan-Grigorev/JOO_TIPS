import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Pages/Layout/Layout";
import Homepage from "./Pages/Homepage/Homepage";
import SignupLogin from "./Pages/Signup-Login/Signup-Login";
import "./scss/global.scss"; // do not delete

const InDev = lazy(() => import("./Pages/InDev/InDev"));

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path="registration" element={<SignupLogin />} />

      <Route path="*" element={<InDev />} />
    </Routes>
  );
}

export default App;
