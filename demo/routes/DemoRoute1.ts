import { Route } from "../../src/Route";
export default  new Route(
  (hostElement: HTMLElement) => {
    return new Promise(
      (resolve, reject) => {
        hostElement.innerHTML = '<p style="background-color: cyan">This is route 1</p>',
          resolve()
      })
  },
  null,
  () => {
    return new Promise(
      (resolve, reject) => {
        console.log('leaving home route')
      })
  }
)
