export type RoutingFunction = ((context?: any) => (void | string))
import {IAttachableComponent} from 'vanilla-typescript'

export class Route {
  cacheResult: false

  constructor (public onFirstVisit: ()=>void,public onVisit: ()=>void, public onLeave: ()=>void) {

  }

}
