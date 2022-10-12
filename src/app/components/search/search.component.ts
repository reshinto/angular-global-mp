import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";
import {
  getCourses,
  searchCourses,
} from "src/app/redux/actions/course.actions";
import { State } from "src/app/redux/reducers";

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

  constructor(
    // eslint-disable-next-line @ngrx/no-typed-global-store
    private store: Store<State>,
  ) {}

  ngOnInit(): void {
    this.subjectKeyUp
      .pipe(debounceTime(700), distinctUntilChanged())
      .subscribe(value => this.handleSearch(value));
  }

  onSearch($event: any): void {
    const value = $event.target.value;
    if (value.length >= 3) {
      this.subjectKeyUp.next(value);
    } else if (!value.length) {
      this.store.dispatch(getCourses({}));
    }
  }

  handleSearch(text: string): void {
    if (this.text) {
      this.store.dispatch(searchCourses({ text }));
    }
  }
}
