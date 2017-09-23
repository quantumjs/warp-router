import { Route } from "../../src/Route";
export default  new Route(
  (hostElement: HTMLElement) => {
    return new Promise(
      (resolve, reject) => {
        hostElement.innerHTML = '<p style="background-color: cadetblue">This is Route 2</p>',
          resolve()
      })
  },
  (hostElement: HTMLElement) => {
    return new Promise(
      (resolve, reject) => {
        hostElement.innerHTML = '<p style="background-color: #75a022">This is Route 2 on revisting</p>',
          resolve()
      })
  }
)
