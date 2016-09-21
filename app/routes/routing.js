"use strict";
var router_1 = require('@angular/router');
var work_1 = require('../pages/work/work');
var home_1 = require('../pages/home/home');
// import { AppComponent } from '../app.component'
var appRoutes = [
    { path: "work", component: work_1.WorkComponent },
    { path: "", component: home_1.HomeComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.js.map