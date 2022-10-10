import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

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
import { CourseborderDirective } from "./directives/courseborder.directive";
import { DurationPipe } from "./pipes/duration.pipe";
import { OrderbyPipe } from "./pipes/orderby.pipe";
import { FilterbyPipe } from "./pipes/filterby.pipe";
import { LoginComponent } from "./pages/login/login.component";
import { CourseComponent } from "./pages/course/course.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { AuthService } from "./services/auth.service";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { LoadingInterceptor } from "./interceptors/loading.interceptor";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./redux/reducers";
import { EffectsModule } from "@ngrx/effects";
import { effects } from "./redux/effects";

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
    CourseborderDirective,
    DurationPipe,
    OrderbyPipe,
    FilterbyPipe,
    LoginComponent,
    CourseComponent,
    NotFoundComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effects),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
