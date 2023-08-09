import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth-slice";
import subscriptionReducer from "./subscription/subscription-slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cookieReducer } from "./cookies/cookies-slice";
import { lessonsReducer } from "./lessons/lessons-slice";
import { languagesReducer } from "./languages/languages-slice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    subscription: subscriptionReducer,
    cookie: cookieReducer,
    lessons: lessonsReducer,
    languages: languagesReducer,
  },
  middleware,
  //   devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
