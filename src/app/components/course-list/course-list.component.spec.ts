import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CourseListComponent } from "./course-list.component";

describe("CourseListComponent", () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should increment numOfDisplay", () => {
    expect(component.numOfDisplay).toBe(3);
    component.loadMoreCourses();
    expect(component.numOfDisplay).toBe(6);
  });

  it("should test for deleteCourse console output", () => {
    const courseProps = {
      id: 1,
      title: "test",
      creationDate: "12082022",
      duration: "60",
      description: "abc",
    };

    console.log = jasmine.createSpy("log");
    component.deleteCourse(courseProps);
    expect(console.log).toHaveBeenCalled();
  });

  it("should test for editCourse console output", () => {
    const courseProps = {
      id: 1,
      title: "test",
      creationDate: "12082022",
      duration: "60",
      description: "abc",
    };

    console.log = jasmine.createSpy("log");
    component.editCourse(courseProps);
    expect(console.log).toHaveBeenCalled();
  });
});
