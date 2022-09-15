export type BreadcrumbLinks = {
  name: string;
  path: string;
};

export type BreadcrumbMap = {
  [k: string]: [] | BreadcrumbLinks[];
};
