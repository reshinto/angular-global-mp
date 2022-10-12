import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { logout } from "src/app/redux/actions/auth.actions";
import { State } from "src/app/redux/reducers";
import {
  selectIsAuthenticated,
  selectUser,
} from "src/app/redux/selectors/auth.selectors";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  title: string = "video course";
  user$ = this.store.select(selectUser);
  isAuthenticated$ = this.store.select(selectIsAuthenticated);

  // eslint-disable-next-line @ngrx/no-typed-global-store
  constructor(private store: Store<State>) {}

  logout(): void {
    this.store.dispatch(logout());
  }
}
