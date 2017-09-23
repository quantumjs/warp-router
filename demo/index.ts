import { WarpRouter } from '../src/WarpRouter'
import { Configuration } from "../src/Configuration";
import { Route } from "../src/Route";
import demoRoute1 from "./routes/DemoRoute1";
import demoRoute2 from "./routes/DemoRoute2";
import { CreateComponent } from "./SimpleComponent";

function createDemo () {
  const configuration = new Configuration('')
  configuration.defaultRoute = ""
  const router = new WarpRouter(configuration)
  let routes: Map<string, Route> = new Map()

  // 2 inline routes and one from a module
  routes.set("", new Route(
    (hostElement: HTMLElement) => {
      return new Promise(
        (resolve, reject) => {
          hostElement.innerHTML = '<p style="background-color: orange">This is the home route</p>',
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
  ))

  routes.set("#page1", demoRoute1)

  routes.set("#page2", demoRoute2)

  router.setRoutes(routes)

  router.show(document.querySelector('.container') as HTMLElement)
}

createDemo()

