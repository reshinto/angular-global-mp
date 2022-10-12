import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OrderbyPipe } from "src/app/pipes/orderby.pipe";

import { CourseListComponent } from "./course-list.component";

const d1 = new Date();
d1.setFullYear(2022, 8, 10);

const courseProps = {
  id: 1,
  name: "test",
  date: d1,
  length: 88,
  description: "abc",
  isTopRated: false,
};
