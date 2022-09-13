import { Injectable } from "@angular/core";
import { Course } from "../components/course-item/course";
import { COURSES } from "../components/course-list/mock-data";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  courses: Course[] = COURSES;

  constructor() {}

  getCourses(): Course[] {
    return this.courses;
  }

  createCourse(course: Course): void {
    this.courses.push(course);
  }

  getCourse(id: number): Course {
    return this.courses.filter((course: Course) => course.id === id)?.[0];
  }

  updateCourse(newCourse: Course): void {
    this.courses = this.courses.map((course: Course) => {
      if (course.id === newCourse.id) {
        return newCourse;
      }
      return course;
    });
  }

  removeCourse(courseToDelete: Course): void {
    this.courses = this.courses.filter(
      (course: Course) => course.id !== courseToDelete.id,
    );
  }
}
