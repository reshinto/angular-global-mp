import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
} from "../actions/auth.actions";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      switchMap(payload =>
        from(
          this.authService.login(payload.email, payload.password).pipe(
            map(payload => {
              const result = loginSuccess({ data: payload });
              this.router.navigate(["/courses"]);
              return result;
            }),
            catchError(error => of(loginFailure({ error }))),
          ),
        ),
      ),
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logout),
        tap(() => {
          sessionStorage.removeItem("token");
          this.router.navigate(["/login"]);
        }),
      );
    },
    { dispatch: false },
  );
}
