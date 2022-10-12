import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import {
  deleteCourse,
  loadCourses,
} from "src/app/redux/actions/course.actions";
import { State } from "src/app/redux/reducers";
import { Course } from "../course-item/course";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent implements OnInit {
  @Input()
  appInstance: any;
  @Input()
  courses!: Course[];
  @Input()
  showLoadMore!: boolean;

  constructor(
    public router: Router,
    // eslint-disable-next-line @ngrx/no-typed-global-store
    private store: Store<State>,
  ) {}

  ngOnInit(): void {}

  identify(index: number, item: Course) {
    return item.id;
  }

  loadMoreCourses(): void {
    this.store.dispatch(loadCourses({ start: 3 }));
  }

  deleteCourse(courseId: number): void {
    const confirmation = window.confirm(
      "Do you really want to delete this course?",
    );
    if (confirmation) {
      this.store.dispatch(deleteCourse({ id: courseId }));
      this.appInstance.updated = true;
    }
  }

  editCourse(course: Course): void {
    sessionStorage.setItem("temp", JSON.stringify(course));
    this.router.navigate([`/courses/${course.id}`]);
  }
}
