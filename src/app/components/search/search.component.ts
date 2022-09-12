import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "../course-item/course";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onFilterCourse: EventEmitter<string> = new EventEmitter();
  @Input()
  courses!: Course[];
  text!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.onFilterCourse.emit(this.text);
    this.text = "";
  }
}
