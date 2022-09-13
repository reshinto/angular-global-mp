import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should login successfully", () => {
    console.log = jasmine.createSpy("log");
    const email = "test@email.com";
    const password = "password";
    service.login(email, password);
    expect(console.log).toHaveBeenCalled();
    expect(service.hasError).toBeFalsy();
  });

  it("should login unsuccessfully", () => {
    console.log = jasmine.createSpy("log");
    service.users = [];
    const email = "test@email.com";
    const password = "password";
    service.login(email, password);
    expect(console.log).not.toHaveBeenCalled();
    expect(service.hasError).toBeTruthy();
  });

  it("should logout successfully", () => {
    const email = "test@email.com";
    const password = "password";
    service.login(email, password);
    expect(service.isAuthenticated).toBeTruthy();
    service.logout();
    expect(service.isAuthenticated).toBeFalsy();
  });

  it("should return empty user info", () => {
    const result = {
      id: 0,
      firstName: "",
      lastName: "",
    };
    expect(service.getUserInfo()).toEqual(result);
  });

  it("should return user info", () => {
    const result = {
      id: 1,
      firstName: "Terence",
      lastName: "Kong",
    };
    const email = "test@email.com";
    const password = "password";
    service.login(email, password);
    expect(service.getUserInfo()).toEqual(result);
  });
});
