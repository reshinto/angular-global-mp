import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService } from "src/app/services/course.service";
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

  constructor(private courseService: CourseService, public router: Router) {}

  ngOnInit(): void {}

  identify(index: number, item: Course) {
    return item.id;
  }

  loadMoreCourses(): void {
    this.appInstance.numOfDisplay += 3;
    this.appInstance.limitCourses();
  }

  deleteCourse(course: Course): void {
    const confirmation = window.confirm(
      "Do you really want to delete this course?",
    );
    if (confirmation) {
      this.courseService.removeCourse(course).subscribe();
      this.appInstance.updated = true;
      console.log("delete", course);
    }
  }

  editCourse(id?: number, name?: string): void {
    this.router.navigate([`/courses/${id}`, { name }]);
  }
}
