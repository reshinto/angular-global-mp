import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonComponent } from "./button.component";

describe("ButtonComponent", () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit onClick", () => {
    const sampleText = "test";
    component.text = sampleText;
    spyOn(component.onCustomClick, "emit");

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector(".button-container");
    button?.dispatchEvent(new Event("click"));

    fixture.detectChanges();

    expect(component.onCustomClick.emit).toHaveBeenCalled();
  });
});
