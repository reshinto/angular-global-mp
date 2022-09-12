import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from "lodash";
import { Course } from "../components/course-item/course";

@Pipe({
  name: "orderBy",
})
export class OrderbyPipe implements PipeTransform {
  transform(
    array: Course[],
    sortBy: string,
    order?: string,
    ...args: unknown[]
  ): Course[] {
    const sortOrder = order ? order : "asc";

    return orderBy(array, [sortBy], [sortOrder as "asc" | "desc"]);
  }
}
