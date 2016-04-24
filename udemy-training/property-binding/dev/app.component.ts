import {Component} from 'angular2/core';
import {PropertyBindingComponent} from './property-binding.component'

@Component({
    selector: 'my-app',
    template: `
    <section class='parent'>
        <h1>This is the parent</h1>
        <h2>Please enter your name: </h2>
        <input type = 'text' [(ngModel)] = "name">
        <br><br>
        <section class = 'child'>
            <my-property-binding [myName]="name" [myAge]="27" (hobbiesChanged) = "hobbies = $event"></my-property-binding>            
        </section>  
        <br><br>
        My Hobbies are : {{hobbies}}  
    </section>
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    name: string;
    hobbies : string;
}
