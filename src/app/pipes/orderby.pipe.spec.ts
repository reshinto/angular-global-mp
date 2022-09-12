import { OrderbyPipe } from "./orderby.pipe";

const d1 = new Date();
d1.setFullYear(2022, 8, 10);
const d2 = new Date();
d2.setFullYear(2022, 7, 10);
const courses = [
  {
    id: 1,
    title: "video course 1. name tag",
    creationDate: d1,
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

describe("OrderbyPipe", () => {
  const pipe = new OrderbyPipe();

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should transform to descending order of courses", () => {
    const sortBy = "creationDate";
    const order = "desc";
    const result = [
      {
        id: 1,
        title: "video course 1. name tag",
        creationDate: d1,
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
    expect(pipe.transform(courses, sortBy, order)).toEqual(result);
  });

  it("should transform to ascending order of courses", () => {
    const sortBy = "creationDate";
    const order = "asc";
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
      {
        id: 1,
        title: "video course 1. name tag",
        creationDate: d1,
        duration: 15,
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        topRated: false,
      },
    ];
    expect(pipe.transform(courses, sortBy, order)).toEqual(result);
  });

  it("should transform to ascending order of courses by default", () => {
    const sortBy = "creationDate";
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
      {
        id: 1,
        title: "video course 1. name tag",
        creationDate: d1,
        duration: 15,
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        topRated: false,
      },
    ];
    expect(pipe.transform(courses, sortBy)).toEqual(result);
  });
});
