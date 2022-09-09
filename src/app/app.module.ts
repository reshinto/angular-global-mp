import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { ButtonComponent } from "./components/button/button.component";
import { CourseItemComponent } from "./components/course-item/course-item.component";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LogoComponent } from "./components/logo/logo.component";
import { SearchComponent } from "./components/search/search.component";
import { CoursesComponent } from "./pages/courses/courses.component";

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    CourseItemComponent,
    CourseListComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    CoursesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
