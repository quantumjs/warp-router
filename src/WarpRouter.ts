import { Configuration } from './Configuration'
import { Route } from './Route'
import { IComponent, getFormValues } from 'vanilla-typescript'

export class WarpRouter implements IComponent {

  public hostElement: HTMLElement

  /**
   *
   * @param selector where the router will be embedded
   * @param routes can take a function that will generate a string
   */
  constructor (public routes: Map<string, Route>, public configuration: Configuration) {
  }

  setRoutes (routes: Map<string, Route>) {
    this.routes = routes
  }

  onHashChange (routeString: string) {
    let route: Route = this.routes.get(routeString)
    // get the home route if no hash
    if (!route) {
      route = this.routes.get("")
    }
    route.onVisit(this.hostElement).then((result: any) => console.log(result))
  }

  addListeners (): void {
    window.addEventListener('hashchange', this.onHashChangeBoundWithThis)
  }

  removeListeners (): void {
    window.removeEventListener('hashchange', this.onHashChangeBoundWithThis)
  }

  /**
   * Add listeners
   */
  show (parentElement: HTMLElement): Promise<void> {
    return new Promise((resolve, reject) => {
      this.hostElement = parentElement
      this.addListeners()
      this.onHashChange(window.location.hash ? window.location.hash : this.configuration.routeIfNoHash)
      resolve()
    })
  }

  /**
   * Add listeners
   */
  destroy (): Promise<void> {
    return new Promise(
      (resolve) => {
        this.removeListeners()
        this.hostElement.parentElement.removeChild(this.hostElement)
        resolve()
      })
  }

  private onHashChangeBoundWithThis = (event: HashChangeEvent) => {
    this.onHashChange(window.location.hash)
  }
}
