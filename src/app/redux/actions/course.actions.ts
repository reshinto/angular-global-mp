import { createAction, props } from "@ngrx/store";
import { Course } from "src/app/components/course-item/course";

export const getCourses = createAction(
  "[Course] Get Courses",
  props<{
    start?: number;
    step?: number;
    usePagination?: boolean;
  }>(),
);

export const getCoursesSuccess = createAction(
  "[Course] Get Courses Success",
  props<{ data: Course[] }>(),
);

export const getCoursesFailure = createAction(
  "[Course] Get Courses Failure",
  props<{ error: string }>(),
);

export const loadCourses = createAction(
  "[Course] Load Courses",
  props<{
    start?: number;
    step?: number;
  }>(),
);

export const loadCoursesSuccess = createAction(
  "[Course] Load Courses Success",
  props<{ data: Course[] }>(),
);

export const loadCoursesFailure = createAction(
  "[Course] Load Courses Failure",
  props<{ error: string }>(),
);

export const searchCourses = createAction(
  "[Course] Search Courses",
  props<{
    text: string;
  }>(),
);

export const searchCoursesSuccess = createAction(
  "[Course] Search Courses Success",
  props<{ data: Course[] }>(),
);

export const searchCoursesFailure = createAction(
  "[Course] Search Courses Failure",
  props<{ error: string }>(),
);

export const addCourse = createAction(
  "[Course] Add Course",
  props<{ course: Course }>(),
);

export const addCourseSuccess = createAction(
  "[Course] Add Course Success",
  props<{ data: Course }>(),
);

export const addCourseFailure = createAction(
  "[Course] Add Course Failure",
  props<{ error: string }>(),
);

export const editCourse = createAction(
  "[Course] Edit Course",
  props<{ course: Course }>(),
);

export const editCourseSuccess = createAction(
  "[Course] Edit Course Success",
  props<{ data: Course }>(),
);

export const editCourseFailure = createAction(
  "[Course] Edit Course Failure",
  props<{ error: string }>(),
);

export const deleteCourse = createAction(
  "[Course] Delete Course",
  props<{ id: number }>(),
);

export const deleteCourseSuccess = createAction(
  "[Course] Delete Course Success",
);

export const deleteCourseFailure = createAction(
  "[Course] Delete Course Failure",
  props<{ error: string }>(),
);
