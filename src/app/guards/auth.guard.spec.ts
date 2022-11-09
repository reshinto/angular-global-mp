import { TestBed } from "@angular/core/testing";

import { AuthGuard } from "./auth.guard";

xdescribe("AuthGuard", () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });

  it("should return true when authenticated", () => {
    guard.authService.isAuthenticated = true;
    expect(guard.canActivate(undefined as any, undefined as any)).toBeTruthy();
  });

  it("should return false when not authenticated", () => {
    spyOn(guard.router, "navigate");

    guard.authService.isAuthenticated = false;
    expect(guard.canActivate(undefined as any, undefined as any)).toBeFalsy();
    expect(guard.router.navigate).toHaveBeenCalledWith(["/login"]);
  });
});
