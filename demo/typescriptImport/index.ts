import WarpRouter from 'warp-router'
import {Configuration} from "../../src/Configuration";

function createDemo() {
  let routes: Map<string,() => void> = new Map()
  routes.set("", function () {
    this.hostElement.innerHTML = "This is the home page"
  })

  const configuration = new Configuration()
  configuration.defaultRoute = ""
  const component = new WarpRouter('.container', routes, configuration)
}

createDemo()

