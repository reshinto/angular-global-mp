import { Component, OnInit } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Course } from "../components/course-item/course";
import { CourseborderDirective } from "./courseborder.directive";

const d1 = new Date();
d1.setFullYear(2022, 8, 10);

@Component({
  template: "",
})
class TestComponent implements OnInit {
  course: Course = {
    id: 1,
    name: "test",
    date: d1,
    length: 88,
    description: "abc",
    isTopRated: false,
  };
  ngOnInit(): void {}
}

describe("CourseborderDirective", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseborderDirective, TestComponent],
    });
  });

  it("should return upcoming border color", async () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template:
          "<div appCourseborder [creationDate]='course.creationDate'></div>",
      },
    });

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const directiveEl = fixture.debugElement.query(
        By.directive(CourseborderDirective),
      );
      expect(directiveEl).not.toBeNull();

      const directiveInstance = directiveEl.injector.get(CourseborderDirective);
      const d1 = new Date();
      d1.setFullYear(3022, 9, 10);
      const d2 = new Date();
      d2.setFullYear(2022, 8, 13);
      expect(directiveInstance.setBorderColor(d1, d2, d2)).toBe(
        "1px solid blue",
      );
      fixture.detectChanges();
    });
  });

  it("should return fresh border color", async () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template:
          "<div appCourseborder [creationDate]='course.creationDate'></div>",
      },
    });

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const directiveEl = fixture.debugElement.query(
        By.directive(CourseborderDirective),
      );
      expect(directiveEl).not.toBeNull();

      const directiveInstance = directiveEl.injector.get(CourseborderDirective);
      const d1 = new Date();
      d1.setFullYear(2022, 8, 11);
      const d2 = new Date();
      d2.setFullYear(2022, 8, 14);
      const d3 = new Date();
      d3.setFullYear(2022, 8, 14);
      expect(directiveInstance.setBorderColor(d1, d2, d3)).toBe(
        "1px solid green",
      );
      fixture.detectChanges();
    });
  });

  it("should return fresh border color", async () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template:
          "<div appCourseborder [creationDate]='course.creationDate'></div>",
      },
    });

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const directiveEl = fixture.debugElement.query(
        By.directive(CourseborderDirective),
      );
      expect(directiveEl).not.toBeNull();

      const directiveInstance = directiveEl.injector.get(CourseborderDirective);
      const d1 = new Date();
      d1.setFullYear(3022, 9, 10);
      const d2 = new Date();
      d2.setFullYear(2022, 8, 13);
      expect(directiveInstance.setBorderColor(d1, d2, d2)).toBe(
        "1px solid blue",
      );
      fixture.detectChanges();
    });
  });

  it("should return others border color", async () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template:
          "<div appCourseborder [creationDate]='course.creationDate'></div>",
      },
    });

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const directiveEl = fixture.debugElement.query(
        By.directive(CourseborderDirective),
      );
      expect(directiveEl).not.toBeNull();

      const directiveInstance = directiveEl.injector.get(CourseborderDirective);
      const d1 = new Date();
      d1.setFullYear(2022, 7, 1);
      const d2 = new Date();
      d2.setFullYear(2022, 8, 14);
      const d3 = new Date();
      d3.setFullYear(2022, 8, 14);
      expect(directiveInstance.setBorderColor(d1, d2, d3)).toBe("");
      fixture.detectChanges();
    });
  });
});
