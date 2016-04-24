import {Component, EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';

@Component({
    selector: 'my-property-binding',
    template: `
        <h2>This is the child component</h2>
        Hi, I am {{name}}. I am {{age}} years old
        <h3>Enter your hobbies</h3>
        <input type = 'text' #hobbies (keyup) = 'onHobbiesChange(hobbies.value)' />
    `,
    inputs:['name:myName'],
    outputs: ['hobbiesChanged']
})
export class PropertyBindingComponent {
    name : string;  
    @Input ('myAge') age : number; 
    hobbiesChanged = new EventEmitter<string>();
    onHobbiesChange(hobbies : string) {
        this.hobbiesChanged.emit(hobbies);
    }
}