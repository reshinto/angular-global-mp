import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Course } from "src/app/components/course-item/course";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit, DoCheck {
  courses!: Course[];
  originalCourses!: Course[];
  numOfDisplay: number = 3;
  showLoadMore!: boolean;
  updated: boolean = false;

  constructor(private courseService: CourseService, public router: Router) {
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
    this.courseService.getCourses().subscribe(response => {
      if (Array.isArray(response)) {
        this.courses = response;
        this.showLoadMore = this.courseService.courseLength > this.numOfDisplay;
      }
    });
  }

  limitCourses(): void {
    this.courseService.loadCourses(3).subscribe(response => {
      if (Array.isArray(response)) {
        this.courses = [...this.courses, ...response];
        this.showLoadMore =
          this.courseService.courseLength > this.courses.length;
      }
    });
  }

  resetDefault(): void {
    this.numOfDisplay = 3;
    this.showLoadMore = false;
  }

  addCourse(): void {
    this.router.navigate(["/courses/new"]);
  }
}
