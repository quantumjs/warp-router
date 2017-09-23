import { Configuration } from './Configuration'
import { Route } from './Route'
import { IComponent, getFormValues } from 'vanilla-typescript'

export class WarpRouter implements IComponent {

  public hostElement: HTMLElement
  public routes: Map<string, Route>

  /**
   *
   * @param selector where the router will be embedded
   * @param routes can take a function that will generate a string
   */
  constructor (public configuration: Configuration) {
    if (!window.location.hash) {
      window.location.hash = configuration.defaultRoute
    }
  }

  setRoutes (routes: Map<string, Route>) {
    this.routes = routes
  }

  onHashChange (routeString: string) {
    try {
      const route: Route = this.routes.get(routeString)
      route.onVisit(this.hostElement).then((result: any) => console.log(result))
    } catch (e) {
      throw new Error('Unrecognised route')
    }
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
      this.onHashChange(this.configuration.defaultRoute)
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
