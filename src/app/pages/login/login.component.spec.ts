import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: "courses",
            component: LoginComponent,
          },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should clear email and password when submit is successful", () => {
    spyOn(component.router, "navigate");
    component.email = "test@email.com";
    component.password = "password";
    component.onSubmit();
    expect(component.hasError).toBe(false);
    expect(component.email).toBe("");
    expect(component.password).toBe("");
    expect(component.router.navigate).toHaveBeenCalledWith(["/courses"]);
  });

  it("should not email and password when submit is not successful", () => {
    component.email = "test@email.com";
    component.password = "password";
    component.onSubmit();
    component.hasError = true;
    expect(component.hasError).toBe(true);
    expect(component.email).toBe("");
    expect(component.password).toBe("");
  });
});
