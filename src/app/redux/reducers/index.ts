import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { authReducer, AuthState } from "./auth.reducer";
import { courseReducer, CourseState } from "./course.reducer";

export interface State {
  auth: AuthState;
  course: CourseState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  course: courseReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
