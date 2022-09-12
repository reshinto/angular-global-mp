import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DurationPipe } from "src/app/pipes/duration.pipe";

import { CourseItemComponent } from "./course-item.component";

const d1 = new Date();
d1.setFullYear(2022, 8, 10);

const initialProps = {
  id: 1,
  title: "test",
  creationDate: d1,
  duration: 88,
  description: "abc",
  topRated: false,
};

describe("CourseItemComponent", () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent, DurationPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = initialProps;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain default course content in html", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled
        .querySelector(".courseitem-top_title")
        ?.textContent?.toLowerCase(),
    ).toContain("test");
  });

  it("should emit onDelete", () => {
    spyOn(component.onDeleteCourse, "emit");

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector("[text=delete]");
    button?.dispatchEvent(new Event("click"));

    fixture.detectChanges();

    expect(component.onDeleteCourse.emit).toHaveBeenCalledWith(initialProps);
  });

  it("should emit onEdit", () => {
    spyOn(component.onEditCourse, "emit");

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector("[text=edit]");
    button?.dispatchEvent(new Event("click"));

    fixture.detectChanges();

    expect(component.onEditCourse.emit).toHaveBeenCalledWith(initialProps);
  });
});
