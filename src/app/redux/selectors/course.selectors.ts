import { createSelector } from "@ngrx/store";
import { Course } from "src/app/components/course-item/course";
import { State } from "../reducers";
import { CourseState } from "../reducers/course.reducer";

export const selectCourseReducer = (state: State): CourseState => state.course;

export const selectCourses = createSelector(
  selectCourseReducer,
  (state: CourseState): Course[] => state.courses,
);

export const selectShowLoadMore = createSelector(
  selectCourseReducer,
  (state: CourseState): boolean => state.showLoadMore,
);
