import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

export const BASE_URL = environment.baseUrl;

export const SERVICES: { [k: string]: string } = {
  auth: "auth",
  courses: "courses",
};

export const AUTH_ROUTES = {
  login: `/login`,
  userinfo: `/userinfo`,
};

export const COURSES_ROUTES = {
  courses: "",
};

export const ROUTES = {
  //@ts-ignore
  [SERVICES.auth]: AUTH_ROUTES,
  //@ts-ignore
  [SERVICES.courses]: COURSES_ROUTES,
};

export const DEFAULT_HTTP_OPTIONS = {
  "Content-Type": "application/json",
};

export const HTTP_OPTIONS = {
  headers: new HttpHeaders(DEFAULT_HTTP_OPTIONS),
};

export function get_url(service: string, route: string = ""): string {
  return `${BASE_URL}/${SERVICES[service]}${route}`;
}
