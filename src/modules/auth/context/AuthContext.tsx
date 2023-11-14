import { PropsWithChildren, createContext, useContext, useReducer } from "react";
import { AuthActions, AuthState, authReducer } from "../reducers/authReducer";

export type AuthContextValues = {
  authState: AuthState;
  authDispatch: React.Dispatch<AuthActions>;
};

const initialState: AuthState = { user: null };
export const AuthContext = createContext<AuthContextValues>({
  authState: initialState,
  authDispatch: (a: AuthActions) => {},
});
export const useAuth = (): AuthContextValues => useContext(AuthContext);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>;
};
