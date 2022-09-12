import { Component, OnInit, Input } from "@angular/core";
import {
  IconDefinition,
  faUser,
  faRightFromBracket,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePlay,
  faPlusSquare,
  faClock,
  faCalendar,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

type SupportedIcon = {
  [k: string]: IconDefinition;
};

const supportedIcons: SupportedIcon = {
  "faLeft": faRightFromBracket,
  "faUser": faUser,
  "faCirclePlay": faCirclePlay,
  "faPlus": faPlusSquare,
  "faClock": faClock,
  "faCalendar": faCalendar,
  "faPen": faPenToSquare,
  "faTrash": faTrashCan,
  "faStar": faStar,
};

@Component({
  selector: "app-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.css"],
})
export class LogoComponent implements OnInit {
  @Input()
  iconName!: string;
  @Input()
  size?: SizeProp = "xs";
  icon!: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    this.icon = supportedIcons[this.iconName];
  }
}
