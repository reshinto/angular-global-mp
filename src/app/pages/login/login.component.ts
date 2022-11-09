import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  hasError: boolean = false;

  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService
      .login(this.email, this.password)
      .pipe(
        switchMap(({ token }) => {
          this.authService.token = token;
          this.authService.isAuthenticated = true;
          this.authService.hasError = false;
          this.hasError = this.authService.hasError;
          return this.authService.getUserInfo();
        }),
      )
      .subscribe({
        next: response => {
          this.authService.hasError = false;
          this.hasError = this.authService.hasError;
          this.authService.user = response.name;
        },
        error: error => {
          console.log("get user error");
          this.authService.hasError = true;
          this.hasError = this.authService.hasError;
          console.log(error);
        },
        complete: () => {
          if (!this.authService.hasError) {
            this.email = "";
            this.password = "";
            this.router.navigate(["/courses"]);
          }
          console.log("logged in successfully");
        },
      });
  }
}
