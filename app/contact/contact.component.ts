import {Component} from 'angular2/core';
@Component({
    selector: 'contact-comp',
    template: `
    <h1>{{title}}</h1>
    <h3>{{message}}</h3>
    `
})
export class ContactComponent {
    title: string = "Contact Us Page";
    message: string = "welcome to contact page";
}