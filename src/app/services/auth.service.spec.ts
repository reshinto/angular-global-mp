import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";

xdescribe("AuthService", () => {
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
    service.user = { first: "test", last: "test" };
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

  xit("should return empty user info", () => {
    const expected = {
      first: "",
      last: "",
    };
    service.getUserInfo();
    // expect(result).toEqual(expected);
  });

  xit("should return user info", async () => {
    const expected = {
      first: "Terence",
      last: "Kong",
    };
    const email = "test@email.com";
    const password = "password";
    service.login(email, password);
    // const result = await service.getUserInfo();
    // expect(result).toEqual(expected);
  });
});
