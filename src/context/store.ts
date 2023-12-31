import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import userNameReducer from "./userNameSlice";
import signUpReducer from "./flagSignUpSlice";
import logInReducer from "./flagLogInSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    userName: userNameReducer,
    openSignUp: signUpReducer,
    openLogIn: logInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
