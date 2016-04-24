import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {TestComponent} from './test-component.component';


@Component({
    selector : 'my-component',
    template : `Hi! I am <span [style.color] = "inputElement.value == 'yes' ? 'red':'blue' ">{{name}}</span>. This is my first angular2 app. <span [class.is-awesome] ="inputElement.value == 'yes'">This is awesome!</span>
    <br/>
    Is it awesome? <input type='text' #inputElement (keyup)="0"/>
    <button [disabled] = "inputElement.value !== 'yes'">Enabled only for yes</button>
    <br/>
    kk
    <testing></testing>
    `,
    styleUrls : ['src/css/mycomponent.css'],
    directives: [TestComponent]
})
export class MyComponentComponent implements OnInit{
        name :string;
        
        ngOnInit() {
            this.name ='PK'
        }
}