import { Directive, ElementRef, Input, OnInit } from "@angular/core";

const courseBorderColors = {
  "fresh": "1px solid green",
  "upcoming": "1px solid blue",
  "others": "",
};

@Directive({
  selector: "[appCourseborder]",
})
export class CourseborderDirective implements OnInit {
  @Input()
  creationDate: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const courseItemEl = this.el.nativeElement;
    const currentDate = new Date();
    const freshDate = new Date();
    courseItemEl.style.border = this.setBorderColor(
      this.creationDate,
      currentDate,
      freshDate,
    );
  }

  setBorderColor(
    creationDate: Date,
    currentDate: Date,
    freshDate: Date,
  ): string {
    freshDate.setDate(freshDate.getDate() - 14);
    if (creationDate < currentDate && creationDate >= freshDate) {
      return courseBorderColors["fresh"];
    } else if (creationDate > currentDate) {
      return courseBorderColors["upcoming"];
    }
    return courseBorderColors["others"];
  }
}
