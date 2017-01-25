import {Configuration} from "./Configuration";
import {Route} from "./Route";
export default class WarpRouter {

  private hostElement: HTMLElement

  /**
   *
   * @param selector where the router will be embedded
   * @param routes can take a function that will generate a string
   */
  constructor(public selector: string,
              public routes: Map<string, Route>,
              public configuration: Configuration = new Configuration()) {

    this.hostElement = <HTMLElement> document.querySelector(selector)
    if (!window.location.hash && configuration.defaultRoute !== null) {
      window.location.hash = configuration.defaultRoute
    }
    this.applyRouteContentFunction(window.location.hash)
    this.addListeners()
  }


  applyRouteContentFunction(routeString: string) {
    try {
      const route: Route = this.routes.get(routeString)
      const result = route.routingFunction()
      if (typeof result === "string") {
        this.hostElement.innerHTML = result
      }
    }
    catch (e) {
      throw new Error("Unrecognised route")
    }
  }

  addListeners() {
    window.addEventListener('hashchange', (event: HashChangeEvent) => {
      this.applyRouteContentFunction(window.location.hash)
    });
  }
}

