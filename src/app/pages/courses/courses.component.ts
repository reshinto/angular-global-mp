import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Course } from "src/app/components/course-item/course";
import { FilterbyPipe } from "src/app/pipes/filterby.pipe";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
  providers: [FilterbyPipe],
})
export class CoursesComponent implements OnInit, DoCheck {
  courses!: Course[];
  originalCourses!: Course[];
  numOfDisplay: number = 3;
  showLoadMore!: boolean;
  updated: boolean = false;

  constructor(
    private filterbycourses: FilterbyPipe,
    private courseService: CourseService,
    public router: Router,
  ) {
    this.numOfDisplay = 3;
  }

  ngOnInit(): void {
    this.formatDisplay();
  }

  ngDoCheck(): void {
    if (this.updated) {
      this.formatDisplay();
      this.updated = false;
    }
  }

  formatDisplay(): void {
    this.courses = this.courseService.getCourses();
    this.originalCourses = this.courses;
    this.showLoadMore = this.courses.length > this.numOfDisplay;
    this.limitCourses();
  }

  filterCourses(text: string) {
    this.courses = this.filterbycourses.transform(
      this.courseService.getCourses(),
      text,
    );
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

  addCourse(): void {
    this.router.navigate(["/new-course"]);
  }
}