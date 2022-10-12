import { createReducer, on } from "@ngrx/store";
import { Course } from "src/app/components/course-item/course";
import {
  addCourse,
  addCourseFailure,
  addCourseSuccess,
  deleteCourse,
  deleteCourseFailure,
  deleteCourseSuccess,
  editCourse,
  editCourseFailure,
  editCourseSuccess,
  getCourses,
  getCoursesFailure,
  getCoursesSuccess,
  loadCourses,
  loadCoursesFailure,
  loadCoursesSuccess,
  searchCourses,
  searchCoursesFailure,
  searchCoursesSuccess,
} from "../actions/course.actions";

export interface CourseState {
  courses: Course[];
  courseLength: number;
  showLoadMore: boolean;

  isCoursesLoading: boolean;
  isSearchCoursesLoading: boolean;
  isAddCourseLoading: boolean;
  isEditCourseLoading: boolean;
  isDeleteCourseLoading: boolean;

  coursesError: string;
  searchCoursesError: string;
  addCourseError: string;
  editCourseError: string;
  deleteCourseError: string;
}

export const initialState: CourseState = {
  courses: [],
  courseLength: 0,
  showLoadMore: false,

  isCoursesLoading: false,
  isSearchCoursesLoading: false,
  isAddCourseLoading: false,
  isEditCourseLoading: false,
  isDeleteCourseLoading: false,

  coursesError: "",
  searchCoursesError: "",
  addCourseError: "",
  editCourseError: "",
  deleteCourseError: "",
};

export const courseReducer = createReducer(
  initialState,
  on(
    getCourses,
    (state): CourseState => ({
      ...state,
      isCoursesLoading: true,
      coursesError: "",
    }),
  ),
  on(getCoursesSuccess, (state: CourseState, payload): CourseState => {
    sessionStorage.setItem("courseDisplayCount", "0");
    return {
      ...state,
      courses: payload.data.filter((data, index) => index < 3),
      courseLength: state.courseLength
        ? state.courseLength
        : payload.data.length,
      showLoadMore: payload.data.length > 3,
      isCoursesLoading: false,
      coursesError: "",
    };
  }),
  on(
    getCoursesFailure,
    (state: CourseState, payload): CourseState => ({
      ...state,
      isCoursesLoading: false,
      coursesError: payload.error,
    }),
  ),

  on(
    loadCourses,
    (state): CourseState => ({
      ...state,
      isCoursesLoading: true,
      coursesError: "",
    }),
  ),
  on(loadCoursesSuccess, (state: CourseState, payload): CourseState => {
    const newCourses = [...state.courses, ...payload.data];
    return {
      ...state,
      courses: newCourses,
      showLoadMore: state.courseLength > newCourses.length,
      isCoursesLoading: false,
      coursesError: "",
    };
  }),
  on(
    loadCoursesFailure,
    (state: CourseState, payload): CourseState => ({
      ...state,
      isCoursesLoading: false,
      coursesError: payload.error,
    }),
  ),

  on(
    searchCourses,
    (state): CourseState => ({
      ...state,
      isSearchCoursesLoading: true,
      searchCoursesError: "",
    }),
  ),
  on(searchCoursesSuccess, (state: CourseState, payload): CourseState => {
    return {
      ...state,
      courses: payload.data,
      isSearchCoursesLoading: false,
      searchCoursesError: "",
    };
  }),
  on(
    searchCoursesFailure,
    (state: CourseState, payload): CourseState => ({
      ...state,
      isSearchCoursesLoading: false,
      searchCoursesError: payload.error,
    }),
  ),

  on(
    addCourse,
    (state): CourseState => ({
      ...state,
      isAddCourseLoading: true,
      addCourseError: "",
    }),
  ),
  on(
    addCourseSuccess,
    (state: CourseState, payload): CourseState => ({
      ...state,
      isAddCourseLoading: false,
      addCourseError: "",
    }),
  ),
  on(
    addCourseFailure,
    (state: CourseState, payload): CourseState => ({
      ...state,
      isAddCourseLoading: false,
      addCourseError: payload.error,
    }),
  ),

  on(
    editCourse,
    (state): CourseState => ({
      ...state,
      isEditCourseLoading: true,
      editCourseError: "",
    }),
  ),
  on(
    editCourseSuccess,
    (state: CourseState, payload): CourseState => ({
      ...state,
      isEditCourseLoading: false,
      editCourseError: "",
    }),
  ),
  on(
    editCourseFailure,
    (state: CourseState, payload): CourseState => ({
      ...state,
      isEditCourseLoading: false,
      editCourseError: payload.error,
    }),
  ),

  on(
    deleteCourse,
    (state): CourseState => ({
      ...state,
      isDeleteCourseLoading: true,
      deleteCourseError: "",
    }),
  ),
  on(
    deleteCourseSuccess,
    (state): CourseState => ({
      ...state,
      isDeleteCourseLoading: false,
      deleteCourseError: "",
    }),
  ),
  on(
    deleteCourseFailure,
    (state: CourseState, payload): CourseState => ({
      ...state,
      isDeleteCourseLoading: false,
      deleteCourseError: payload.error,
    }),
  ),
);
