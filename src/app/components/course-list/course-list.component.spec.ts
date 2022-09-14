import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OrderbyPipe } from "src/app/pipes/orderby.pipe";

import { CourseListComponent } from "./course-list.component";

const d1 = new Date();
d1.setFullYear(2022, 8, 10);

const courseProps = {
  id: 1,
  title: "test",
  creationDate: d1,
  duration: 88,
  description: "abc",
  topRated: false,
};

class TestClass {
  constructor(public numOfDisplay: number = 3) {}
  limitCourses(): void {}
}

describe("CourseListComponent", () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent, OrderbyPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    component.appInstance = new TestClass();
    component.courses = [courseProps];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should increment numOfDisplay", () => {
    expect(component.appInstance.numOfDisplay).toBe(3);
    component.loadMoreCourses();
    expect(component.appInstance.numOfDisplay).toBe(6);
  });

  it("should test for deleteCourse console output", () => {
    console.log = jasmine.createSpy("log");
    spyOn(window, "confirm").and.returnValue(true);
    component.deleteCourse(courseProps);
    expect(window.confirm).toHaveBeenCalledWith(
      "Do you really want to delete this course?",
    );

    expect(console.log).toHaveBeenCalled();
  });

  it("should test for editCourse console output", () => {
    const id = 1;
    spyOn(component.router, "navigate");

    component.editCourse(id);
    expect(component.router.navigate).toHaveBeenCalledWith([`/courses/${id}`]);
  });
});
