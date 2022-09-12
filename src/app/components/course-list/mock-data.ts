import { Course } from "../course-item/course";

const d1 = new Date();
d1.setFullYear(2022, 8, 10);
const d2 = new Date();
d2.setFullYear(2022, 7, 10);
const d3 = new Date();
d3.setFullYear(2022, 9, 10);

export const COURSES: Course[] = [
  {
    id: 1,
    title: "video course 1. name tag",
    creationDate: d1,
    duration: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: true,
  },
  {
    id: 2,
    title: "video course 2. name tag",
    creationDate: d2,
    duration: 15,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
  },
  {
    id: 3,
    title: "video course 3. name tag",
    creationDate: d3,
    duration: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
  },
  {
    id: 4,
    title: "video course 4. name tag",
    creationDate: d1,
    duration: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
  },
  {
    id: 5,
    title: "video course 5. name tag",
    creationDate: d2,
    duration: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
  },
  {
    id: 6,
    title: "video course 6. name tag",
    creationDate: d3,
    duration: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
  },
  {
    id: 7,
    title: "video course 7. name tag",
    creationDate: d1,
    duration: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
  },
  {
    id: 8,
    title: "video course 8. name tag",
    creationDate: d2,
    duration: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
  },
];
