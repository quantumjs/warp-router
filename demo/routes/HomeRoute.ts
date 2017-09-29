import { Route } from "../../src/Route";

export default new Route(
  (hostElement: HTMLElement) => {
    return new Promise(
      (resolve, reject) => {
        // we are being a bit clever here, we are caching the server rendered content into this route
        this.cachedContent = hostElement.innerHTML
        resolve()
      })
  },
  (hostElement: HTMLElement) => {
    return new Promise(
      (resolve, reject) => {
        // when we come back we use the original content
        hostElement.innerHTML = this.cachedContent
        resolve()
      })
  },
  () => {
    return new Promise(
      (resolve, reject) => {
        console.log('leaving home route')
      })
  }
)
