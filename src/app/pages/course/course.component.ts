import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Course } from "src/app/components/course-item/course";
import { CourseService } from "src/app/services/course.service";

const pageTitleMap: {
  [k: string]: string;
} = {
  "/new-course": "New course",
  "/edit-course": "Edit course",
};

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit {
  pageTitle!: string;
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  duration: number = 0;
  @Input()
  date!: string;
  @Input()
  authors!: string;

  constructor(public router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.pageTitle = pageTitleMap[this.router.url];
  }

  cancel(): void {
    this.router.navigate(["/courses"]);
  }

  onSubmit(): void {
    const newCourse: Course = {
      id: 0,
      title: this.title,
      creationDate: new Date(this.date),
      duration: this.duration,
      description: this.description,
      topRated: false,
    };
    this.courseService.createCourse(newCourse);
    this.router.navigate(["/courses"]);
  }
}
