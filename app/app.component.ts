import {Component} from 'angular2/core';
// import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home' },
  {path: '/myabout', component: AboutComponent, name: 'About' },
  {path: '/mycontact', component: ContactComponent, name: 'Contact' },
  
])

@Component({
    selector: 'app-comp',
    templateUrl: 'app/app.tpl.html',
    styleUrls: ['app/app.styles.css'],
    directives:[HomeComponent,AboutComponent,ContactComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {
    title: string;
     navItem = [
        { text: 'Home', value: 'Home', icon: 'glyphicon glyphicon-home' },
        { text: 'About Us', value: 'About', icon: 'glyphicon glyphicon-home' },
        { text: 'Contact Us', value: 'Contact', icon: 'glyphicon glyphicon-home' }        
    ];
    constructor() {
        this.title = "Welcome To RateGain";
    }
}