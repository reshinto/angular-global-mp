import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../components/course-item/course";
import { DEFAULT_HTTP_OPTIONS, get_url, ROUTES, SERVICES } from "./constants";

const DEFAULT_COURSES: Course[] = [
  {
    id: 0,
    name: "",
    description: "",
    isTopRated: false,
    date: new Date(),
    length: 0,
  },
];
@Injectable({
  providedIn: "root",
})
export class CourseService {
  courses: Course[] = DEFAULT_COURSES;
  courseLength!: number;
  coursesDisplayCount: number = 0;

  constructor(private http: HttpClient) {
    this.calculateCourseLength();
  }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        ...DEFAULT_HTTP_OPTIONS,
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }),
    };
  }

  calculateCourseLength(num: number = 0) {
    //@ts-ignore
    let url = get_url(SERVICES.courses, ROUTES.courses.courses);

    this.http.get<Course[]>(url, this.getHttpOptions()).subscribe(response => {
      if (Array.isArray(response)) {
        this.courseLength = response.length + num;
      }
    });
  }

  getCourses(
    usePagination: boolean = true,
    start: number = 0,
    step: number = 3,
  ): Observable<Course[]> {
    //@ts-ignore
    let url = get_url(SERVICES.courses, ROUTES.courses.courses);
    if (usePagination) {
      url += `?sort=date&start=${start}&count=${step}`;
    }
    this.coursesDisplayCount = 0;

    return this.http.get<Course[]>(url, this.getHttpOptions());
  }

  loadCourses(start: number = 0, step: number = 3): Observable<Course[]> {
    this.coursesDisplayCount += start;
    const url = `${get_url(
      //@ts-ignore
      SERVICES.courses,
      //@ts-ignore
      ROUTES.courses.courses,
    )}?sort=date&start=${this.coursesDisplayCount}&count=${step}`;

    return this.http.get<Course[]>(url, this.getHttpOptions());
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

    const result = this.http.post<Course>(url, course, this.getHttpOptions());
    this.calculateCourseLength(1);
    return result;
  }

  getCourse(id: number): Observable<Course> {
    //@ts-ignore
    const url = `${get_url(SERVICES.courses, ROUTES.courses.courses)}/${id}`;
    console.log("called");

    return this.http.get<Course>(url, this.getHttpOptions());
  }

  updateCourse(newCourse: Course): Observable<Course> {
    //@ts-ignore
    const url = `${get_url(SERVICES.courses, ROUTES.courses.courses)}/${
      newCourse.id
    }`;

    return this.http.put<Course>(url, newCourse, this.getHttpOptions());
  }

  removeCourse(courseToDelete: Course): Observable<Course> {
    //@ts-ignore
    const url = `${get_url(SERVICES.courses, ROUTES.courses.courses)}/${
      courseToDelete.id
    }`;

    const result = this.http.delete<Course>(url, this.getHttpOptions());
    this.calculateCourseLength(-1);
    return result;
  }
}
