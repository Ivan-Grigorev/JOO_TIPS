import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// ? Chakra
import { ChakraProvider } from "@chakra-ui/react";
// ? Redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
// ? Redux-persist
import { PersistGate } from "redux-persist/integration/react";
import { Suspense } from "react";
import ChakraSpinner from "./Components/ChakraUI/Spinner/Spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<ChakraSpinner />}>
        <Provider store={store}>
          <PersistGate loading={<ChakraSpinner />} persistor={persistor}>
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </PersistGate>
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
