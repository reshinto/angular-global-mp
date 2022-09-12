import { Component, DoCheck, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

type BreadcrumbLinks = {
  name: string;
  path: string;
};

const BREADCRUMB_LINKS: BreadcrumbLinks[] = [
  {
    name: "Courses",
    path: "/courses",
  },
];

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.css"],
})
export class BreadcrumbsComponent implements OnInit, DoCheck {
  breadcrumbs: BreadcrumbLinks[] = BREADCRUMB_LINKS;
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
  }

  ngDoCheck(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
  }
}
