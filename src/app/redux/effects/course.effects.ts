import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from "rxjs";
import { CourseService } from "src/app/services/course.service";
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

@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService,
  ) {}

  getCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCourses),
      switchMap(payload =>
        from(
          this.courseService
            .getCourses(payload?.start, payload?.step, payload?.usePagination)
            .pipe(
              map(result => getCoursesSuccess({ data: result })),
              catchError(error => of(getCoursesFailure({ error }))),
            ),
        ),
      ),
    );
  });

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCourses),
      switchMap(payload =>
        from(
          this.courseService.loadCourses(payload?.start, payload?.step).pipe(
            map(result => loadCoursesSuccess({ data: result })),
            catchError(error => of(loadCoursesFailure({ error }))),
          ),
        ),
      ),
    );
  });

  searchCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchCourses),
      switchMap(payload =>
        from(
          this.courseService.filterCourses(payload.text).pipe(
            map(result => searchCoursesSuccess({ data: result })),
            catchError(error => of(searchCoursesFailure({ error }))),
          ),
        ),
      ),
    );
  });

  addCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addCourse),
      switchMap(payload =>
        from(
          this.courseService.createCourse(payload.course).pipe(
            map(result => addCourseSuccess({ data: result })),
            catchError(error => of(addCourseFailure({ error }))),
          ),
        ),
      ),
    );
  });

  editCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editCourse),
      switchMap(payload =>
        from(
          this.courseService.updateCourse(payload.course).pipe(
            map(result => editCourseSuccess({ data: result })),
            catchError(error => of(editCourseFailure({ error }))),
          ),
        ),
      ),
    );
  });

  deleteCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteCourse),
      switchMap(payload =>
        from(
          this.courseService.removeCourse(payload.id).pipe(
            map(() => deleteCourseSuccess()),
            catchError(error => of(deleteCourseFailure({ error }))),
          ),
        ),
      ),
    );
  });
}
