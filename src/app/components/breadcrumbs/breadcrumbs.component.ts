import { Component, DoCheck, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { CourseService } from "src/app/services/course.service";
import { Course } from "../course-item/course";
import { BreadcrumbLinks, BreadcrumbMap } from "./breadcrumbs";

const coursesPath: BreadcrumbLinks = {
  name: "courses",
  path: "/courses",
};

const newCoursePath: BreadcrumbLinks = {
  name: "new course",
  path: "/courses/new",
};

const BREADCRUMBS: BreadcrumbMap = {
  "/": [],
  "/courses": [coursesPath],
  "/courses/new": [coursesPath, newCoursePath],
};

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.css"],
})
export class BreadcrumbsComponent implements OnInit, DoCheck {
  breadcrumbs!: BreadcrumbLinks[];
  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private courseService: CourseService,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.breadcrumbs = BREADCRUMBS[this.router.url] as BreadcrumbLinks[];
    this.configureEditCourseBreadcrumb();
  }

  ngDoCheck(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.breadcrumbs = BREADCRUMBS[this.router.url] as BreadcrumbLinks[];
    this.configureEditCourseBreadcrumb();
  }

  editCoursePath(name: string, path: string): BreadcrumbLinks {
    return {
      name,
      path,
    };
  }

  configureEditCourseBreadcrumb(): void {
    if (this.isAuthenticated && !this.breadcrumbs) {
      const id = this.route.snapshot.firstChild?.children[0].params["id"];
      if (id) {
        const course: Course = this.courseService.getCourse(Number(id));
        if (course) {
          this.breadcrumbs = [
            coursesPath,
            this.editCoursePath(course.title, `/courses/${id}`),
          ];
        }
      }
    }
  }
}
