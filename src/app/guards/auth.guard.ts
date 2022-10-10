import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { State } from "../redux/reducers";
import { selectAuth } from "../redux/selectors/auth.selectors";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
    // eslint-disable-next-line @ngrx/no-typed-global-store
    private store: Store<State>,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectAuth).pipe(
      map(data => {
        if (data.isAuthenticated) {
          return true;
        }
        this.router.navigate(["/login"]);
        return false;
      }),
    );
  }
}
