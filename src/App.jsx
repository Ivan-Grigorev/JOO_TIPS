import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Pages/Layout/Layout";
import "./scss/global.scss"; // do not delete

const InDev = lazy(() => import("./Pages/InDev/InDev"));
const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const AuthPage = lazy(() => import("./Pages/AuthPage/AuthPage"));

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path="signup" element={<AuthPage />} />

      <Route path="*" element={<InDev />} />
    </Routes>
  );
}

export default App;
