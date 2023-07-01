import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// ? Chakra
import { ChakraProvider, Spinner } from "@chakra-ui/react";
// ? Redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
// ? Redux-persist
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate
          loading={
            <Spinner
              color="#7e0039c2"
              size={"xl"}
              emptyColor="gray.200"
              speed="900ms"
            />
          }
          persistor={persistor}
        >
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
