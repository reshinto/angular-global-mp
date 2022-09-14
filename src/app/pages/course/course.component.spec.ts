import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  ActivatedRoute,
  convertToParamMap,
  ParamMap,
  RouterModule,
} from "@angular/router";
import { DurationPipe } from "src/app/pipes/duration.pipe";

import { CourseComponent } from "./course.component";

describe("CourseComponent", () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent, DurationPipe],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return double digits", () => {
    let input = "1";
    let expected = "01";
    let result = component.formatDayMonth(input);
    expect(result).toBe(expected);

    input = "12";
    expected = "12";
    result = component.formatDayMonth(input);
    expect(result).toBe(expected);
  });

  it("should not populate course contents", () => {
    spyOn(component.router, "navigate");
    const expected = "";
    const input = undefined;
    component.title = "";
    component.populateCourse(input);
    expect(component.title).toBe(expected);
    expect(component.router.navigate).toHaveBeenCalledWith(["404"]);
  });

  it("should populate course contents", () => {
    const expected = "test123";
    const d1 = new Date();
    d1.setFullYear(2022, 8, 10);

    const initialProps = {
      id: 1,
      title: "test123",
      creationDate: d1,
      duration: 88,
      description: "abc",
      topRated: false,
    };
    component.populateCourse(initialProps);
    expect(component.title).toBe(expected);
  });

  it("should reroute to 404 page when id is not valid in handleParams", () => {
    spyOn(component.router, "navigate");
    const input: ParamMap = convertToParamMap({ id: "abc" });
    component.handleParams(input);
    expect(component.router.navigate).toHaveBeenCalledWith(["404"]);
  });

  it("should navigate to courses page upon cancel", () => {
    spyOn(component.router, "navigate");

    component.cancel();
    expect(component.router.navigate).toHaveBeenCalledWith(["/courses"]);
  });

  it("should create new course and navigate to courses page upon save", () => {
    spyOn(component.router, "navigate");

    component.title = "test";
    component.date = "2022-8-10";
    component.duration = 88;
    component.description = "abc";
    component.isNew = true;

    component.onSubmit();
    expect(component.router.navigate).toHaveBeenCalledWith(["/courses"]);
  });

  it("should update course and navigate to courses page upon save", () => {
    spyOn(component.router, "navigate");
    component.courseId = 1;
    component.title = "test";
    component.date = "2022-8-10";
    component.duration = 88;
    component.description = "abc";
    component.isNew = false;

    component.onSubmit();
    expect(component.router.navigate).toHaveBeenCalledWith(["/courses"]);
  });
});
