import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { SearchComponent } from "./search.component";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.courses = [];
    component.text = "";
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit onSubmit", () => {
    const sampleText = "test";
    component.text = sampleText;
    spyOn(component.onFilterCourse, "emit");

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector(".search-container");
    button?.dispatchEvent(new Event("submit"));

    fixture.detectChanges();

    expect(component.onFilterCourse.emit).toHaveBeenCalledWith("test");
    expect(component.text).toEqual("");
  });
});
