import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Course } from "src/app/components/course-item/course";
import { addCourse, editCourse } from "src/app/redux/actions/course.actions";
import { State } from "src/app/redux/reducers";

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
  courseId!: number;
  isNew: boolean = true;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    // eslint-disable-next-line @ngrx/no-typed-global-store
    private store: Store<State>,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params: ParamMap) => {
      this.handleParams(params);
    });
    this.updatePageTitle();
  }

  formatDayMonth(value: string): string {
    return value.length === 1 ? "0" + value : value;
  }

  populateCourse(course: Course | undefined): void {
    if (course) {
      this.title = course?.name;
      this.description = course.description;
      this.duration = course.length;
      const currentDate = new Date(course.date);
      const year = currentDate.getFullYear();
      const month = this.formatDayMonth(String(currentDate.getMonth() + 1));
      const day = this.formatDayMonth(String(currentDate.getDate()));
      this.date = `${year}-${month}-${day}`;
      this.isNew = false;
    } else {
      this.router.navigate(["404"]);
    }
  }

  handleParams(params: ParamMap) {
    const id = params.get("id") as string;
    this.isNew = true;
    if (!isNaN(Number(id))) {
      this.courseId = Number(id);
      const course = JSON.parse(sessionStorage.getItem("temp") || "");
      this.populateCourse(course);
      this.isNew = false;
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
    sessionStorage.removeItem("temp");
    this.router.navigate(["/courses"]);
  }

  onSubmit(): void {
    const newCourse: Course = {
      name: this.title,
      date: new Date(this.date),
      length: this.duration,
      description: this.description,
      isTopRated: false,
    };
    if (this.isNew) {
      this.store.dispatch(addCourse({ course: newCourse }));
    } else {
      const updatedCourse = { ...newCourse, id: this.courseId };
      this.store.dispatch(editCourse({ course: updatedCourse }));
      sessionStorage.removeItem("temp");
    }
    this.router.navigate(["/courses"]);
  }
}
