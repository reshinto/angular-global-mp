import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./pages/courses/courses.component";
import { LoginComponent } from "./pages/login/login.component";
import { CourseComponent } from "./pages/course/course.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "courses", component: CoursesComponent },
  { path: "new-course", component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
