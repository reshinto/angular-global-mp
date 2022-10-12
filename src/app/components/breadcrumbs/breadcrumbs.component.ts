import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { State } from "src/app/redux/reducers";
import { selectIsAuthenticated } from "src/app/redux/selectors/auth.selectors";
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
  isAuthenticated$ = this.store.select(selectIsAuthenticated);

  constructor(
    public router: Router,
    // eslint-disable-next-line @ngrx/no-typed-global-store
    private store: Store<State>,
  ) {}

  ngOnInit() {
    this.breadcrumbs = BREADCRUMBS[this.router.url] as BreadcrumbLinks[];
    this.configureEditCourseBreadcrumb();
  }

  ngDoCheck(): void {
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
    if (!this.breadcrumbs) {
      const course = JSON.parse(sessionStorage.getItem("temp") || "");
      const id = course?.id;
      const name = course?.name;

      if (id) {
        this.breadcrumbs = [
          coursesPath,
          this.editCoursePath(name, `/courses/${id}`),
        ];
      }
      if (this.router.url === "/login") {
        this.breadcrumbs = [];
      }
    }
  }

  handleClick(name: string) {
    if (BREADCRUMBS[name]) {
      this.router.navigate([name]);
    }
  }
}
