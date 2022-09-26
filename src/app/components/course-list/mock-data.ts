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
    name: "video course 1. name tag",
    date: d1,
    length: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: true,
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
  {
    id: 3,
    name: "video course 3. name tag",
    date: d3,
    length: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: false,
  },
  {
    id: 4,
    name: "video course 4. name tag",
    date: d1,
    length: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: false,
  },
  {
    id: 5,
    name: "video course 5. name tag",
    date: d2,
    length: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: false,
  },
  {
    id: 6,
    name: "video course 6. name tag",
    date: d3,
    length: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: false,
  },
  {
    id: 7,
    name: "video course 7. name tag",
    date: d1,
    length: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: false,
  },
  {
    id: 8,
    name: "video course 8. name tag",
    date: d2,
    length: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: false,
  },
];
