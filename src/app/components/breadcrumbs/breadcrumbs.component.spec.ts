import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, RouterModule } from "@angular/router";

import { BreadcrumbsComponent } from "./breadcrumbs.component";

describe("BreadcrumbsComponent", () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbsComponent],
      imports: [RouterModule.forRoot([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              firstChild: {
                children: [
                  {
                    params: {
                      id: 1,
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return breacrumbLink object", () => {
    const expected = {
      name: "test",
      path: "/path",
    };
    const result = component.editCoursePath(expected.name, expected.path);

    expect(result).toEqual(expected);
  });

  it("should update breadcrumbs", () => {
    component.isAuthenticated = true;
    component.breadcrumbs = undefined as any;
    component.configureEditCourseBreadcrumb();
    expect(component.breadcrumbs).toEqual([
      { name: "courses", path: "/courses" },
      {
        name: "video course 1. name tag",
        path: "/courses/1",
      },
    ]);
  });
});
