import { TestBed } from "@angular/core/testing";
import { Course } from "../components/course-item/course";
import { COURSES } from "../components/course-list/mock-data";

import { CourseService } from "./course.service";

xdescribe("CourseService", () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
    service.courses = COURSES;
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get all courses", async () => {
    const result = await service.getCourses();
    // expect(result).toEqual(COURSES);
  });

  it("should get 1 course", async () => {
    const input = 1;
    const result = await service.getCourse(input);
    // expect(result).toEqual(COURSES[0]);
  });

  it("should add new course", async () => {
    const d1 = new Date();
    d1.setFullYear(2022, 8, 10);
    const newCourse: Course = {
      id: 0,
      name: "test",
      date: d1,
      length: 88,
      description: "abc",
      isTopRated: false,
    };
    const expected: Course[] = [...COURSES, newCourse];
    service.createCourse(newCourse);
    // const result = await service.getCourses();

    // expect(result).toEqual(expected);
  });

  it("should update course", async () => {
    const d1 = new Date();
    d1.setFullYear(2022, 8, 10);
    const updatedCourse: Course = {
      id: 1,
      name: "test",
      date: d1,
      length: 88,
      description: "abc",
      isTopRated: false,
    };
    const expected: Course[] = COURSES.map((course: Course) => {
      if (course.id === updatedCourse.id) {
        return updatedCourse;
      }
      return course;
    });
    service.updateCourse(updatedCourse).subscribe();
    // const result = await service.getCourses();

    // expect(result).toEqual(expected);
  });

  it("should delete course", async () => {
    const d1 = new Date();
    d1.setFullYear(2022, 8, 10);
    const courseToDelete: Course = {
      id: 1,
      name: "test",
      date: d1,
      length: 88,
      description: "abc",
      isTopRated: false,
    };
    const expected: Course[] = COURSES.filter(
      (course: Course) => course.id !== courseToDelete.id,
    );
    service.removeCourse(courseToDelete).subscribe();
    // const result = await service.getCourses();

    // expect(result).toEqual(expected);
  });
});
