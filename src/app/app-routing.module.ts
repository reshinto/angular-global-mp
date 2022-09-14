import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./pages/courses/courses.component";
import { LoginComponent } from "./pages/login/login.component";
import { CourseComponent } from "./pages/course/course.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "courses", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "courses",
    canActivate: [AuthGuard],
    children: [
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
    ],
  },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
