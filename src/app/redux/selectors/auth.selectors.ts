import { createSelector } from "@ngrx/store";
import { State } from "../reducers";
import { AuthState } from "../reducers/auth.reducer";

export const selectAuthReducer = (state: State): AuthState => state.auth;

export const selectAuth = createSelector(
  selectAuthReducer,
  (state: AuthState): AuthState => state,
);

export const selectIsAuthenticated = createSelector(
  selectAuthReducer,
  (state: AuthState) => state.isAuthenticated,
);

export const selectUser = createSelector(
  selectAuthReducer,
  (state: AuthState) => `${state.user.name.first} ${state.user.name.last}`,
);

export const selectAuthError = createSelector(
  selectAuthReducer,
  (state: AuthState) => state.loginError !== "",
);
