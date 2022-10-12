import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { getCourses } from "src/app/redux/actions/course.actions";
import { State } from "src/app/redux/reducers";
import {
  selectCourses,
  selectShowLoadMore,
} from "src/app/redux/selectors/course.selectors";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit, DoCheck {
  courses$ = this.store.select(selectCourses);
  showLoadMore$ = this.store.select(selectShowLoadMore);
  updated: boolean = false;

  constructor(
    public router: Router,
    // eslint-disable-next-line @ngrx/no-typed-global-store
    private store: Store<State>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getCourses({ usePagination: false }));
  }

  ngDoCheck(): void {
    if (this.updated) {
      this.store.dispatch(getCourses({ usePagination: false }));
      this.updated = false;
    }
  }

  addCourse(): void {
    this.router.navigate(["/courses/new"]);
  }
}
