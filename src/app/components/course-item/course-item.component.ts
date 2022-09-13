import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { Course } from "./course";

@Component({
  selector: "app-course-item",
  templateUrl: "./course-item.component.html",
  styleUrls: ["./course-item.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  @Input()
  course!: Course;
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onDeleteCourse: EventEmitter<Course> = new EventEmitter();
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onEditCourse: EventEmitter<Course> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(course: Course): void {
    this.onDeleteCourse.emit(course);
  }

  onEdit(course: Course): void {
    this.onEditCourse.emit(course);
  }
}
