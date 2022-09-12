import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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

  onSubmit(): void {
    this.authService.login(this.email, this.password);
    this.hasError = this.authService.hasError;
    if (!this.hasError) {
      this.email = "";
      this.password = "";
      this.router.navigate(["/courses"]);
    }
  }
}
