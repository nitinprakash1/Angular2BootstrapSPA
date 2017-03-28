System.register(['angular2/core', './home/home.component', './about/about.component', './contact/contact.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, home_component_1, about_component_1, contact_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.navItem = [
                        { text: 'Home', value: 'Home', icon: 'glyphicon glyphicon-home' },
                        { text: 'About Us', value: 'About', icon: 'glyphicon glyphicon-home' },
                        { text: 'Contact Us', value: 'Contact', icon: 'glyphicon glyphicon-home' }
                    ];
                    this.title = "Welcome To RateGain";
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: home_component_1.HomeComponent, name: 'Home' },
                        { path: '/myabout', component: about_component_1.AboutComponent, name: 'About' },
                        { path: '/mycontact', component: contact_component_1.ContactComponent, name: 'Contact' },
                    ]),
                    core_1.Component({
                        selector: 'app-comp',
                        templateUrl: 'app/app.tpl.html',
                        styleUrls: ['app/app.styles.css'],
                        directives: [home_component_1.HomeComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map