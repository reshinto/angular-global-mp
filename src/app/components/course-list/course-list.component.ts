import { Component, OnInit } from "@angular/core";
import { Course } from "../course-item/course";

const COURSES: Course[] = [
  {
    id: 1,
    title: "Video Course 1. Name tag",
    creationDate: "08/28/2020",
    duration: "1h 28 min",
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
  },
  {
    id: 2,
    title: "Video Course 1. Name tag",
    creationDate: "08/28/2020",
    duration: "1h 28 min",
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
  },
  {
    id: 3,
    title: "Video Course 1. Name tag",
    creationDate: "08/28/2020",
    duration: "1h 28 min",
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
  },
  {
    id: 4,
    title: "Video Course 1. Name tag",
    creationDate: "08/28/2020",
    duration: "1h 28 min",
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
  },
];
@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = COURSES;
  showLoadMore: boolean = COURSES.length > 3;

  constructor() {}

  ngOnInit(): void {
    this.courses = COURSES.filter((course: Course, index) => index < 3);
  }
}
