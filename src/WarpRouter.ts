import {Configuration} from './Configuration'
import {Route} from './Route'
export class WarpRouter {

  public hostElement: HTMLElement
  public routes: Map<string, Route>

  /**
   *
   * @param selector where the router will be embedded
   * @param routes can take a function that will generate a string
   */
  constructor (public selector: string,
              public configuration: Configuration = new Configuration()) {
    this.hostElement = document.querySelector(selector) as HTMLElement

    if (!window.location.hash && configuration.defaultRoute !== null) {
      window.location.hash = configuration.defaultRoute
    }
  }

  setRoutes (routes: Map<string, Route>) {
    this.routes = routes
  }

  applyRouteContentFunction (routeString: string) {
    try {
      const route: Route = this.routes.get(routeString)
      const result = route.routingFunction()
      if (typeof result === 'string') {
        this.hostElement.innerHTML = result
      }
    }
    catch (e) {
      throw new Error('Unrecognised route')
    }
  }

  addListeners () {
    window.addEventListener('hashchange', (event: HashChangeEvent) => {
      this.applyRouteContentFunction(window.location.hash)
    })
  }

  attach () {
    this.addListeners()
  }
}
