import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { login } from "src/app/redux/actions/auth.actions";
import { State } from "src/app/redux/reducers";
import { selectAuthError } from "src/app/redux/selectors/auth.selectors";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email!: string;
  password!: string;
  hasError$ = this.store.select(selectAuthError);

  // eslint-disable-next-line @ngrx/no-typed-global-store
  constructor(public router: Router, private store: Store<State>) {}

  onSubmit() {
    this.store.dispatch(login({ email: this.email, password: this.password }));
  }
}
