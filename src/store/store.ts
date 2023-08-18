import { configureStore } from "@reduxjs/toolkit";
import { AuthState } from "../modules/auth/store/authSlice";
import authReducer from "../modules/auth/store/authSlice";
/* eslint-disable-next-line */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type AppStore = {
  auth: AuthState;
};

export const store = configureStore<AppStore>({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
