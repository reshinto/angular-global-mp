import { Component, Input, OnInit } from "@angular/core";
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

  constructor() {}

  ngOnInit(): void {}

  identify(index: number, item: Course) {
    return item.id;
  }

  loadMoreCourses(): void {
    this.appInstance.numOfDisplay += 3;
    this.appInstance.limitCourses();
  }

  deleteCourse(course: Course): void {
    console.log("delete", course);
  }

  editCourse(course: Course): void {
    console.log("edit", course);
  }
}
