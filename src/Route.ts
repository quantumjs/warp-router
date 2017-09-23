// export type RoutingFunction = ((context?: any) => (void | string))

/**
 * Used by a Warp router on hash change.
 * The router passes the host element in each time
 */
export class Route {
  // todo cacheResult: false
  isFirstVisit: boolean = true

  /**
   *
   * @param onFirstVisit
   * @param onProceedingVisit If this is not supplied each visit will use onFirstVisit
   * @param onLeave
   */
  constructor (private onFirstVisit: (hostElement: HTMLElement) => Promise<any>,
               private onProceedingVisit?: (hostElement: HTMLElement) => Promise<any>,
               public onLeave?: (hostElement: HTMLElement) => Promise<any>) {

  }

  onVisit (hostElement: HTMLElement) {
    if (this.isFirstVisit) {
      if (this.onProceedingVisit) {
        this.isFirstVisit = false
      }
      return this.onFirstVisit(hostElement)
    }
    return this.onProceedingVisit(hostElement)
  }

}
