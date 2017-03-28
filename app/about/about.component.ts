import {Component} from 'angular2/core';
@Component({
    selector: 'about-comp',
    template: `
    <h1>{{title}}</h1>
    <h3>{{message}}</h3>
    `
})
export class AboutComponent {
    title: string = "About Us Page";
    message: string = "welcome to about page";
}