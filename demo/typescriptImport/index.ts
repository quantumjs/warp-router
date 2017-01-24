import WarpRouter from 'warp-router'
import {Configuration} from "../../src/Configuration";

function createDemo() {
  let routes: Map<string,() => string> = new Map()
  routes.set("", function () {
    return "This is the home page"
  })
  routes.set("#page1", function () {
    return "This is page 1"
  })
  routes.set("#page2", function () {
    return "This is page 2"
  })

  const configuration = new Configuration()
  configuration.defaultRoute = ""
  const component = new WarpRouter('.container', routes, configuration)
}

createDemo()

