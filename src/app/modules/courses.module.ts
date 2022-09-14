import { NgModule } from "@angular/core";
import { CoursesComponent } from "src/app/pages/courses/courses.component";
import { CourseComponent } from "src/app/pages/course/course.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: CoursesComponent,
  },
  {
    path: ":id",
    component: CourseComponent,
  },
  {
    path: "new",
    component: CourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesModule {}
