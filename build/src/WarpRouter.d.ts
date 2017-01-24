import { Configuration } from "./Configuration";
export default class WarpRouter {
    selector: string;
    routes: Map<string, () => string>;
    configuration: Configuration;
    private hostElement;
    /**
     *
     * @param selector where the router will be embedded
     * @param routes
     */
    constructor(selector: string, routes: Map<string, () => string>, configuration?: Configuration);
    applyRouteContentFunction(route: string): void;
    addListeners(): void;
}
