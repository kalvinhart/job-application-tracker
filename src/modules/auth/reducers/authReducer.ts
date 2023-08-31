import { User } from "../types/User";

export type AuthState = {
  user: User | null;
  token: string | null;
};

export enum AuthActionTypes {
  SET_USER = "set_user",
  SET_TOKEN = "set_token",
  SIGN_OUT = "sign_out",
}

type SetUserAction = {
  type: AuthActionTypes.SET_USER;
  payload: User;
};

type SetTokenAction = {
  type: AuthActionTypes.SET_TOKEN;
  payload: string | null;
};

type SignOutAction = {
  type: AuthActionTypes.SIGN_OUT;
};

export type AuthActions = SetUserAction | SetTokenAction | SignOutAction;

export const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AuthActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case AuthActionTypes.SIGN_OUT:
      return {
        ...state,
        user: null,
        token: null,
      };
  }
};
