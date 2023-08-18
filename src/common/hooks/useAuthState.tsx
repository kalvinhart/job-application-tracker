import { useAppSelector } from "../../store/store";
import { AuthState } from "../../modules/auth/store/authSlice";

export const useAuthState = (): AuthState => {
  return useAppSelector(state => state.auth);
};
