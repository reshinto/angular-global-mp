import { Component, DoCheck, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
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
  isUpdated: boolean = false;

  constructor(
    private authService: AuthService,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.breadcrumbs = BREADCRUMBS[this.router.url] as BreadcrumbLinks[];
    this.configureEditCourseBreadcrumb();
  }

  ngDoCheck(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    const breadcrumbs = BREADCRUMBS[this.router.url] as BreadcrumbLinks[];
    if (JSON.stringify(breadcrumbs) !== JSON.stringify(this.breadcrumbs)) {
      this.breadcrumbs = breadcrumbs;
      this.configureEditCourseBreadcrumb();
    }
  }

  editCoursePath(name: string, path: string): BreadcrumbLinks {
    return {
      name,
      path,
    };
  }

  configureEditCourseBreadcrumb() {
    if (this.isAuthenticated && !this.breadcrumbs) {
      const id = this.route.snapshot.firstChild?.children[0].params["id"];
      const name = this.route.snapshot.firstChild?.children[0].params["name"];
      if (id) {
        this.breadcrumbs = [
          coursesPath,
          this.editCoursePath(name, `/courses/${id}`),
        ];
      }
    }
  }

  handleClick(name: string) {
    if (BREADCRUMBS[name]) {
      this.router.navigate([name]);
    }
  }
}
