import { Course } from "../components/course-item/course";
import { FilterbyPipe } from "./filterby.pipe";

const d2 = new Date();
d2.setFullYear(2022, 7, 10);
const courses = [
  {
    id: 1,
    title: "video course 1. name tag",
    creationDate: d2,
    duration: 15,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
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
];

describe("FilterbyPipe", () => {
  const pipe = new FilterbyPipe();

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should transform to empty array", () => {
    const input = "test";
    const result: Course[] = [];
    expect(pipe.transform(courses, input)).toEqual(result);
  });

  it("should transform to only 1 element in array", () => {
    const input = "2";
    const result = [
      {
        id: 2,
        title: "video course 2. name tag",
        creationDate: d2,
        duration: 15,
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        topRated: false,
      },
    ];
    expect(pipe.transform(courses, input)).toEqual(result);
  });
});
