import { IState } from "@/providers";

export interface IAuthPayload {
  name: string;
}

export interface IAuthContext {
  updateAuthState: (payload: IAuthPayload) => void;
  clearAuthState: () => void;
  state: IState;
}
