# warp-router

Routing for simple minded people

## installation
You can install into your application by running 
npm install --save-dev warp-router

## Why

I made this router was for my own consumption, I had minimal requirements for routing and didn't need a full framework, but you are free to use it too! In fact I would love you to use it!

## Demo
  
  [Basic usage](https://quantumjs.github.io/warp-router/demo/typescriptImport/build)

## Features

* Works with hash(#) URLS for now.

## Usage

You import and set up the routes like so:

```js
import WarpRouter from 'warp-router'
import {Configuration} from "../../src/Configuration";

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
```
The configuration is strongly typed and all the settings are set to null. Defaults are used when null. The warp router is bound to a 
host element. It finds this via the selector parameter. It will only modify content inside this host element. Its possible to have multiple 
 routers running on the same page, bound to different host elements


