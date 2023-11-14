import { User } from "../types/User";

export type AuthState = {
  user: User | null;
};

export enum AuthActionTypes {
  SET_USER = "set_user",
  SIGN_OUT = "sign_out",
}

type SetUserAction = {
  type: AuthActionTypes.SET_USER;
  payload: User;
};

type SignOutAction = {
  type: AuthActionTypes.SIGN_OUT;
};

export type AuthActions = SetUserAction | SignOutAction;

export const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AuthActionTypes.SIGN_OUT:
      return {
        ...state,
        user: null,
      };
  }
};
