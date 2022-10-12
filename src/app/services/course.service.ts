import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../components/course-item/course";
import { DEFAULT_HTTP_OPTIONS, get_url, ROUTES, SERVICES } from "./constants";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        ...DEFAULT_HTTP_OPTIONS,
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }),
    };
  }

  getCourses(
    start: number = 0,
    step: number = 3,
    usePagination: boolean = true,
    courseDisplayCount: number = 0,
  ): Observable<Course[]> {
    //@ts-ignore
    let url = get_url(SERVICES.courses, ROUTES.courses.courses);
    if (usePagination) {
      if (courseDisplayCount > 0) {
        url += `?sort=date&start=${courseDisplayCount}&count=${step}`;
      } else {
        url += `?sort=date&start=${start}&count=${step}`;
      }
    }

    return this.http.get<Course[]>(url, this.getHttpOptions());
  }

  loadCourses(start: number = 0, step: number = 3): Observable<Course[]> {
    const newCourseDisplayCount =
      Number(sessionStorage.getItem("courseDisplayCount")) + start;
    sessionStorage.setItem("courseDisplayCount", `${newCourseDisplayCount}`);
    return this.getCourses(start, step, true, newCourseDisplayCount);
  }

  filterCourses(text: string): Observable<Course[]> {
    const url = `${get_url(
      //@ts-ignore
      SERVICES.courses,
      //@ts-ignore
      ROUTES.courses.courses,
    )}?sort=date&textFragment=${text}`;

    return this.http.get<Course[]>(url, this.getHttpOptions());
  }

  createCourse(course: Course): Observable<Course> {
    //@ts-ignore
    const url = get_url(SERVICES.courses, ROUTES.courses.courses);

    return this.http.post<Course>(url, course, this.getHttpOptions());
  }

  getCourse(id: number): Observable<Course> {
    //@ts-ignore
    const url = `${get_url(SERVICES.courses, ROUTES.courses.courses)}/${id}`;

    return this.http.get<Course>(url, this.getHttpOptions());
  }

  updateCourse(newCourse: Course): Observable<Course> {
    //@ts-ignore
    const url = `${get_url(SERVICES.courses, ROUTES.courses.courses)}/${
      newCourse.id
    }`;

    return this.http.put<Course>(url, newCourse, this.getHttpOptions());
  }

  removeCourse(courseId: number): Observable<Course> {
    const url = `${get_url(
      //@ts-ignore
      SERVICES.courses,
      //@ts-ignore
      ROUTES.courses.courses,
    )}/${courseId}`;

    return this.http.delete<Course>(url, this.getHttpOptions());
  }
}
