﻿import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class RouterService {
    constructor(router) {
        this.router = router;
    }

    navigateToRoute(route, routeObject) {
        if(routeObject) {
            this.router.navigateToRoute(route, routeObject);
        }
        else {
            this.router.navigateToRoute(route);
        }
    }
}