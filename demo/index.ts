import { WarpRouter } from '../src/WarpRouter'
import { Configuration } from "../src/Configuration";
import { Route } from "../src/Route";
import homeRoute from "./routes/HomeRoute";
import demoRoute1 from "./routes/DemoRoute1";
import demoRoute2 from "./routes/DemoRoute2";
import { CreateComponent } from "./SimpleComponent";

function createDemo () {

  let routes: Map<string, Route> = new Map()

  // 2 inline routes and one from a module
  routes.set("", homeRoute)

  routes.set("#page1", demoRoute1)

  routes.set("#page2", demoRoute2)

  const configuration = new Configuration('')
  configuration.routeIfNoHash = ""
  const router = new WarpRouter(routes, configuration)

  router.show(document.querySelector('.container') as HTMLElement)
}

createDemo()

