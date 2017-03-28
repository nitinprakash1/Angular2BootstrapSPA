import {Component} from 'angular2/core';
@Component({
    selector: 'home-comp',
    template: `
    <h1>{{title}}</h1>
    <h3>{{message}}</h3>
    `
})
export class HomeComponent {
    title: string = "Home Page";
    message: string = "welcome to home page";
}