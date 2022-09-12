import { TestBed } from "@angular/core/testing";
import { Course } from "../components/course-item/course";
import { COURSES } from "../components/course-list/mock-data";

import { CourseService } from "./course.service";

describe("CourseService", () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
    service.courses = COURSES;
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get all courses", () => {
    expect(service.getCourses()).toEqual(COURSES);
  });

  it("should get 1 courses", () => {
    const input = 1;
    expect(service.getCourse(input)).toEqual(COURSES[0]);
  });

  it("should add new course", () => {
    const d1 = new Date();
    d1.setFullYear(2022, 8, 10);
    const newCourse: Course = {
      id: 0,
      title: "test",
      creationDate: d1,
      duration: 88,
      description: "abc",
      topRated: false,
    };
    const result: Course[] = [...COURSES, newCourse];
    service.createCourse(newCourse);

    expect(service.getCourses()).toEqual(result);
  });

  it("should update course", () => {
    const d1 = new Date();
    d1.setFullYear(2022, 8, 10);
    const updatedCourse: Course = {
      id: 1,
      title: "test",
      creationDate: d1,
      duration: 88,
      description: "abc",
      topRated: false,
    };
    const result: Course[] = COURSES.map((course: Course) => {
      if (course.id === updatedCourse.id) {
        return updatedCourse;
      }
      return course;
    });
    service.updateCourse(updatedCourse);

    expect(service.getCourses()).toEqual(result);
  });

  it("should delete course", () => {
    const d1 = new Date();
    d1.setFullYear(2022, 8, 10);
    const courseToDelete: Course = {
      id: 1,
      title: "test",
      creationDate: d1,
      duration: 88,
      description: "abc",
      topRated: false,
    };
    console.log(COURSES);
    const result: Course[] = COURSES.filter(
      (course: Course) => course.id !== courseToDelete.id,
    );
    service.removeCourse(courseToDelete);

    expect(service.getCourses()).toEqual(result);
  });
});
