import { NgModule } from "@angular/core";
import { RouteReuseStrategy, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { AuthGuard } from "./guards/auth.guard";
import { CustomRouteReuseStrategy } from "./services/custom-route-reuse-strategy.service";

const routes: Routes = [
  { path: "", redirectTo: "courses", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "courses",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./modules/courses.module").then(mod => mod.CoursesModule),
  },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
    AuthGuard,
  ],
})
export class AppRoutingModule {}
