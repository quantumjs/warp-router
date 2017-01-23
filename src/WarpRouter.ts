import {Configuration} from "./Configuration";
export default class WarpRouter {

  private hostElement: HTMLElement

  /**
   *
   * @param selector where the router will be embedded
   * @param routes
   */
  constructor(public selector: string,
              public routes: Map<string,() => void>,
              public configuration: Configuration = new Configuration()) {

    this.hostElement = <HTMLElement> document.querySelector(selector)
    if (configuration.defaultRoute !== null) {
      window.location.hash = configuration.defaultRoute
      this.applyRouteContentFunction(configuration.defaultRoute)
    }
    this.addListeners()
  }

  urlHashChange(event: HashChangeEvent) {
    this.applyRouteContentFunction(window.location.hash)
  }

  applyRouteContentFunction(route: string) {
    try {
      const contentFunction = this.routes.get(route)
    }
    catch (e) {
      throw new Error("Unrecognised route")
    }
  }

  addListeners() {
    window.addEventListener('hashchange', this.urlHashChange);
  }
}

