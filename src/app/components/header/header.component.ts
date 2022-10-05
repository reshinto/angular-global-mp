import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, DoCheck {
  title: string = "video course";
  isAuthenticated: boolean = false;
  user: string = "User login";

  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
  }

  ngDoCheck(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.user = `${this.authService.user.first} ${this.authService.user.last}`;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
