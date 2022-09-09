import { Component, OnInit } from "@angular/core";

type BreadcrumbLinks = {
  name: string;
  path: string;
};

const BREADCRUMB_LINKS: BreadcrumbLinks[] = [
  {
    name: "Courses",
    path: "/courses",
  },
];

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.css"],
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: BreadcrumbLinks[] = BREADCRUMB_LINKS;

  constructor() {}

  ngOnInit(): void {}
}
