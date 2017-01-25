import WarpRouter from 'warp-router'
import {Configuration} from "../../src/Configuration";
import {Route} from "../../src/Route";

function createDemo() {
  let routes: Map<string,Route> = new Map()
  routes.set("", new Route(function () {
    return "This is the home page"
  }))
  routes.set("#page1", new Route(function () {
    return "This uses a custom context"
  }))

  const configuration = new Configuration()
  configuration.defaultRoute = ""
  const component = new WarpRouter('.container', routes, configuration)
}

createDemo()

