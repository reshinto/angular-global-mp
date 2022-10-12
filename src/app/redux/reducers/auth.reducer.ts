import { createReducer, on } from "@ngrx/store";
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
} from "../actions/auth.actions";
import { User } from "../../types";

export type UserType = {
  id: number;
  fakeToken: string;
  login: string;
  password: string;
  name: User;
};

const DEFAULT_USER: UserType = {
  id: 1,
  fakeToken: "",
  login: "",
  password: "",
  name: {
    first: "",
    last: "",
  },
};

export interface AuthState {
  user: UserType;
  isAuthenticated: boolean;

  isLoginLoading: boolean;
  loginError: string;
}

export const initialState: AuthState = {
  user: DEFAULT_USER,
  isAuthenticated: false,

  isLoginLoading: false,
  loginError: "",
};

export const authReducer = createReducer(
  initialState,
  on(
    login,
    (state): AuthState => ({ ...state, isLoginLoading: true, loginError: "" }),
  ),
  on(
    loginSuccess,
    (state: AuthState, payload): AuthState => ({
      ...state,
      user: payload.data,
      isAuthenticated: true,
      isLoginLoading: false,
      loginError: "",
    }),
  ),
  on(
    loginFailure,
    (state: AuthState, payload): AuthState => ({
      ...state,
      isLoginLoading: false,
      loginError: payload.error,
    }),
  ),

  on(
    logout,
    (state): AuthState => ({
      ...state,
      user: DEFAULT_USER,
      isAuthenticated: false,
      isLoginLoading: false,
      loginError: "",
    }),
  ),
);
