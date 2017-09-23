export class Configuration {

  /**
   * will navigate to this if there is no hash (ie http://yoursite.com)
   * If http://yoursite.com#something then the #something route will be rendered (if available)
   */

  constructor (public routeIfNoHash: string) {

  }
}
