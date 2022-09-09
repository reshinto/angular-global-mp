import { Component, OnInit, Input } from "@angular/core";
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

  constructor() {}

  ngOnInit(): void {}
}
