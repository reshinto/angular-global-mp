import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CoursesComponent } from "./courses.component";

const d1 = new Date();
d1.setFullYear(2022, 8, 10);
const d2 = new Date();
d2.setFullYear(2022, 7, 10);
const courses = [
  {
    id: 1,
    name: "video course 1. name tag",
    date: d1,
    length: 15,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: false,
  },
  {
    id: 2,
    name: "video course 2. name tag",
    date: d2,
    length: 15,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: false,
  },
];
