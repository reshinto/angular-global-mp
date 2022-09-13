import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

type BreadcrumbLinks = {
  name: string;
  path: string;
};

const coursesPath: BreadcrumbLinks = {
  name: "courses",
  path: "/courses",
};

const newCoursePath: BreadcrumbLinks = {
  name: "new course",
  path: "/new-course",
};

type BreadcrumbMap = {
  [k: string]: [] | BreadcrumbLinks[];
};

const BREADCRUMBS: BreadcrumbMap = {
  "/": [],
  "/courses": [coursesPath],
  "/new-course": [coursesPath, newCoursePath],
};

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.css"],
})
export class BreadcrumbsComponent implements OnInit, DoCheck {
  breadcrumbs!: BreadcrumbLinks[];
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.breadcrumbs = BREADCRUMBS[this.router.url] as BreadcrumbLinks[];
  }

  ngDoCheck(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.breadcrumbs = BREADCRUMBS[this.router.url] as BreadcrumbLinks[];
  }
}
