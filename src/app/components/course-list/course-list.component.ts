import { Component, OnInit } from "@angular/core";
import { Course } from "../course-item/course";
import { COURSES } from "./mock-data";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = COURSES;
  numOfDisplay: number = 3;
  showLoadMore: boolean = COURSES.length > this.numOfDisplay;

  constructor() {}

  ngOnInit(): void {
    this.filterCourses();
  }

  filterCourses(): void {
    this.courses = COURSES.filter(
      (course: Course, index) => index < this.numOfDisplay,
    );
    this.showLoadMore = COURSES.length > this.courses.length;
  }

  identify(index: number, item: Course) {
    return item.id;
  }

  loadMoreCourses(): void {
    this.numOfDisplay += 3;
    this.filterCourses();
  }

  deleteCourse(course: Course): void {
    console.log("delete", course);
  }

  editCourse(course: Course): void {
    console.log("edit", course);
  }
}
