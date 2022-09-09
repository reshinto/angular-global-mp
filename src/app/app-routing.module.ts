import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { CoursesComponent } from "./pages/courses/courses.component";

const routes: Routes = [
  { path: "", component: CoursesComponent },
  { path: "courses", component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
