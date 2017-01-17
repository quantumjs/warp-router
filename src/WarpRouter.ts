
export class WarpRouter {

  private hostElement: HTMLElement

  /**
   *
   * @param selector where the router will be embedded
   * @param routes
   */
  constructor(public selector: string, public routes: Map<string,()=>void>) {
    this.hostElement = <HTMLElement> document.querySelector(selector)
  }

  urlHashChange(event: HashChangeEvent) {

    switch (window.location.hash) {

     /* case '#login': {
        const login = new Login()
        mainContentElement.appendChild(login.getElement())
        break
      }

      }
      default: {
        renderHomePage()
      }*/
    }
  }

  addListeners() {
    window.addEventListener('hashchange', this.urlHashChange);

  }
}

/*export class Route {

 constructor(public urlPart: string, public contentFunction: () => void) {

 }
 }
 */
