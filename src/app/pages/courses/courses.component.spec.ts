import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CoursesComponent } from "./courses.component";

const d1 = new Date();
d1.setFullYear(2022, 8, 10);
const d2 = new Date();
d2.setFullYear(2022, 7, 10);
const courses = [
  {
    id: 1,
    title: "video course 1. name tag",
    creationDate: d1,
    duration: 15,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
  },
  {
    id: 2,
    title: "video course 2. name tag",
    creationDate: d2,
    duration: 15,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
  },
];

describe("CoursesComponent", () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    component.courses = courses;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should filter and return 1 course", () => {
    const result = [
      {
        id: 1,
        title: "video course 1. name tag",
        creationDate: d1,
        duration: 88,
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        topRated: true,
      },
    ];
    component.filterCourses("1");
    expect(component.numOfDisplay).toBe(3);
    expect(component.courses[0].id).toEqual(result[0].id);
  });

  it("should trigger ngDoCheck", () => {
    component.updated = true;
    fixture.detectChanges();
    expect(component.updated).toBe(false);
  });

  it("should navigate to new-course page", () => {
    spyOn(component.router, "navigate");

    component.addCourse();
    expect(component.router.navigate).toHaveBeenCalledWith(["/courses/new"]);
  });
});
