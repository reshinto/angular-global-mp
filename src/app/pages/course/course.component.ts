import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Course } from "src/app/components/course-item/course";
import { CourseService } from "src/app/services/course.service";

const pageTitleMap: {
  [k: string]: string;
} = {
  "/courses/new": "new",
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
  courseId?: number;
  isNew: boolean = true;

  constructor(
    public router: Router,
    private courseService: CourseService,
    public route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.handleParams(params);
    });
    this.updatePageTitle();
  }

  formatDayMonth(value: string): string {
    return value.length === 1 ? "0" + value : value;
  }

  populateCourse(course: Course | undefined): void {
    if (course) {
      this.title = course.title;
      this.description = course.description;
      this.duration = course.duration;
      const year = course.creationDate.getFullYear();
      const month = this.formatDayMonth(
        String(course.creationDate.getMonth() + 1),
      );
      const day = this.formatDayMonth(String(course.creationDate.getDate()));
      this.date = `${year}-${month}-${day}`;
      this.isNew = false;
    } else {
      this.router.navigate(["404"]);
    }
  }

  handleParams(params: ParamMap): void {
    const id = params.get("id") as string;
    this.isNew = true;
    if (!isNaN(Number(id))) {
      this.courseId = Number(id);
      const course: Course = this.courseService.getCourse(Number(id));
      this.populateCourse(course);
    } else if (id !== "new") {
      this.router.navigate(["404"]);
    }
  }

  updatePageTitle() {
    this.pageTitle = pageTitleMap[this.router.url];
    if (!this.pageTitle) {
      this.pageTitle = "edit";
    }
  }

  cancel(): void {
    this.router.navigate(["/courses"]);
  }

  onSubmit(): void {
    const newCourse: Course = {
      id: this.courseId ? this.courseId : 0,
      title: this.title,
      creationDate: new Date(this.date),
      duration: this.duration,
      description: this.description,
      topRated: false,
    };
    if (this.isNew) {
      this.courseService.createCourse(newCourse);
    } else {
      this.courseService.updateCourse(newCourse);
    }
    this.router.navigate(["/courses"]);
  }
}
