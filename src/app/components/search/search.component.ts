import { Component, Input, OnInit, Output } from "@angular/core";
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
} from "rxjs";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  @Input()
  appInstance: any;
  text!: string;
  private subjectKeyUp = new Subject<any>();
  courses$!: Subscription;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.subjectKeyUp
      .pipe(debounceTime(700), distinctUntilChanged())
      .subscribe(value => this.handleSearch(value));
  }

  onSearch($event: any): void {
    const value = $event.target.value;
    if (value.length >= 3) {
      this.subjectKeyUp.next(value);
    }
  }

  handleSearch(text: string): void {
    this.courses$ = this.courseService
      .filterCourses(text)
      .subscribe(response => {
        if (Array.isArray(response)) {
          this.appInstance.courses = response;
          this.appInstance.resetDefault();
        }
      });
  }
}
