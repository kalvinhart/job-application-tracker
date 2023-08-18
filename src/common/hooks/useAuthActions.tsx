import { useCallback } from "react";
import { setUser } from "../../modules/auth/store/authSlice";
import { User } from "../../modules/auth/types/User";
import { useAppDispatch } from "../../store/store";

type AuthActions = {
  setUser: (user: User | null) => void;
};

export const useAuthActions = (): AuthActions => {
  const dispatch = useAppDispatch();

  return {
    setUser: useCallback(
      (user: User | null) => {
        dispatch(setUser(user));
      },
      [dispatch]
    ),
  };
};
