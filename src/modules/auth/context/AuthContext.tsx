import { PropsWithChildren, createContext, useContext, useEffect, useReducer } from "react";
import { AuthActionTypes, AuthActions, AuthState, authReducer } from "../reducers/authReducer";
import { useServices } from "../../../common/context/ServicesContext";
import { StorageItems } from "../../../common/enums/StorageItems";

export type AuthContextValues = {
  authState: AuthState;
  authDispatch: React.Dispatch<AuthActions>;
};

const initialState: AuthState = { user: null, token: null };
export const AuthContext = createContext<AuthContextValues>({
  authState: initialState,
  authDispatch: (a: AuthActions) => {},
});
export const useAuth = (): AuthContextValues => useContext(AuthContext);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const { storageService, httpService } = useServices();

  useEffect(() => {
    const storedToken = storageService.getItem<string>(StorageItems.USER_TOKEN);

    if (!authState.user && storedToken) {
      httpService.setAuthToken(storedToken);
      authDispatch({ type: AuthActionTypes.SET_TOKEN, payload: storedToken });
    }
  }, [storageService, httpService, authState.user]);

  return <AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>;
};
