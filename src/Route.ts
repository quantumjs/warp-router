export type RoutingFunction = ((context?: any) => (void | string))

export class Route {
  cacheResult: false

  constructor(public routingFunction: RoutingFunction, public context= null) {

  }
}
