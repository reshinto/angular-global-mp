import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../components/course-item/course";

@Pipe({
  name: "filterby",
})
export class FilterbyPipe implements PipeTransform {
  transform(
    courses: Course[],
    value: string = "",
    ...args: unknown[]
  ): Course[] {
    return courses.filter((course: Course) =>
      course.title.toLowerCase().includes(value.toLowerCase()),
    );
  }
}
