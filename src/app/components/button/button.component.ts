import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit {
  @Input()
  text!: string;
  @Input()
  iconName!: string;
  @Input()
  rotateLogo?: string;
  @Input()
  size?: SizeProp = "xs";
  @Input()
  showLogo?: boolean = true;
  @Input()
  btnStyle!: string;
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onCustomClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.onCustomClick.emit();
  }
}
