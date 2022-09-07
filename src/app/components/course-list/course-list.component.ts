import { Component, OnInit, DoCheck } from "@angular/core";
import { Course } from "../course-item/course";
import { COURSES } from "./mock-data";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent implements OnInit, DoCheck {
  courses: Course[] = COURSES;
  numOfDisplay: number = 3;
  showLoadMore: boolean = COURSES.length > this.numOfDisplay;

  constructor() {}

  ngOnInit(): void {
    this.filterCourses(this.numOfDisplay);
  }

  ngDoCheck(): void {
    this.filterCourses(this.courses.length);
  }

  filterCourses(limit: number): void {
    this.courses = COURSES.filter(
      (course: Course, index) => index < this.numOfDisplay,
    );
    this.showLoadMore = COURSES.length > limit;
  }

  identify(index: number, item: Course) {
    return item.id;
  }

  loadMoreCourses(): void {
    this.numOfDisplay += 3;
  }

  deleteCourse(course: Course): void {
    console.log("delete", course);
  }

  editCourse(course: Course): void {
    console.log("edit", course);
  }
}
