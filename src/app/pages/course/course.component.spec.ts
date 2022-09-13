import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Course } from "src/app/components/course-item/course";
import { DurationPipe } from "src/app/pipes/duration.pipe";

import { CourseComponent } from "./course.component";

describe("CourseComponent", () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent, DurationPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should navigate to courses page upon cancel", () => {
    spyOn(component.router, "navigate");

    component.cancel();
    expect(component.router.navigate).toHaveBeenCalledWith(["/courses"]);
  });

  it("should navigate to courses page upon save", () => {
    spyOn(component.router, "navigate");

    component.title = "test";
    component.date = "2022-8-10";
    component.duration = 88;
    component.description = "abc";

    component.onSubmit();
    expect(component.router.navigate).toHaveBeenCalledWith(["/courses"]);
  });
});
