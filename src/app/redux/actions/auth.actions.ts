import { createAction, props } from "@ngrx/store";
import { UserType } from "../reducers/auth.reducer";

export const login = createAction(
  "[Auth] Load login",
  props<{ email: string; password: string }>(),
);

export const loginSuccess = createAction(
  "[Auth] login Success",
  props<{ data: UserType }>(),
);

export const loginFailure = createAction(
  "[Auth] login Failure",
  props<{ error: string }>(),
);

export const logout = createAction("[Auth] logout");
