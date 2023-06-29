import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Pages/Layout/Layout";
import Homepage from "./Pages/Homepage/Homepage";
import("./scss/global.scss");

const InDev = lazy(() => import("./Pages/InDev/InDev"));

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path="*" element={<InDev />} />
    </Routes>
  );
}

export default App;
