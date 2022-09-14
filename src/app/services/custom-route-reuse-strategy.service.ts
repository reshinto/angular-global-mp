import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from "@angular/router";

interface RouteStorageObject {
  snapshot: ActivatedRouteSnapshot;
  handle: DetachedRouteHandle;
}

const TO_BE_CACHED_PATH = ":id";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private storedRoutes: { [key: string]: RouteStorageObject } = {};

  calcKey(route: ActivatedRouteSnapshot) {
    return route.routeConfig?.path || "";
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const cachePath = this.calcKey(route);
    // console.info("shouldDetach() - route key: " + cachePath);
    return TO_BE_CACHED_PATH === cachePath;
  }

  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null,
  ): void {
    let storedRoute: RouteStorageObject = {
      snapshot: route,
      handle: handle as DetachedRouteHandle,
    };
    // console.info("store() - route key: " + this.calcKey(route));
    this.storedRoutes[this.calcKey(route)] = storedRoute;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // console.info("shouldAttach() - route key: " + this.calcKey(route));
    return this.storedRoutes[this.calcKey(route)] !== undefined;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    // console.info("retrieve() - route key: " + this.calcKey(route));
    if (this.storedRoutes[this.calcKey(route)] === undefined) {
      return null;
    } else {
      return this.storedRoutes[this.calcKey(route)].handle;
    }
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot,
  ): boolean {
    let returnValue = future.routeConfig === curr.routeConfig;
    if (future.routeConfig != null && curr.routeConfig != null) {
      returnValue = this.calcKey(future) === this.calcKey(curr);
      // console.info(
      //   "shouldReuseRoute() - future: " +
      //     this.calcKey(future) +
      //     ", curr: " +
      //     this.calcKey(curr) +
      //     ", future.routeConfig.path:" +
      //     future.routeConfig.path +
      //     ", curr.routeConfig.path:" +
      //     curr.routeConfig.path +
      //     ", returnValue: " +
      //     returnValue,
      // );
    } else {
      // console.info(
      //   "shouldReuseRoute() - future: " +
      //     this.calcKey(future) +
      //     ", curr: " +
      //     this.calcKey(curr) +
      //     ", future.routeConfig:" +
      //     future.routeConfig +
      //     ", curr.routeConfig:" +
      //     curr.routeConfig +
      //     ", returnValue: " +
      //     returnValue,
      // );
    }
    return returnValue;
  }
}
