import { Component, OnInit } from "@angular/core";
import { Course } from "src/app/components/course-item/course";
import { COURSES } from "src/app/components/course-list/mock-data";
import { FilterbyPipe } from "src/app/pipes/filterby.pipe";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
  providers: [FilterbyPipe],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = COURSES;
  originalCourses: Course[] = COURSES;
  numOfDisplay: number = 3;
  showLoadMore!: boolean;

  constructor(private filterbycourses: FilterbyPipe) {
    this.numOfDisplay = 3;
  }

  ngOnInit(): void {
    this.showLoadMore = COURSES.length > this.numOfDisplay;
    this.limitCourses();
  }

  filterCourses(text: string) {
    this.courses = this.filterbycourses.transform(COURSES, text);
    this.originalCourses = this.courses;
    this.numOfDisplay = 3;
    this.limitCourses();
  }

  limitCourses(): void {
    this.courses = this.originalCourses.filter(
      (course: Course, index) => index < this.numOfDisplay,
    );
    this.showLoadMore = this.originalCourses.length > this.courses.length;
  }
}
