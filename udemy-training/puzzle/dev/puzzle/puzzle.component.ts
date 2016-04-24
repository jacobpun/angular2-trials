import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector : 'my-puzzle',
    template : `
        <section class="setup">
            Enter your name please:
            <input type = "text" #name (keyup)="0">
        </section>
        <section 
        [ngClass] = "{
            puzzle: true,
            solved: switch1.value == switch1ExpectedValue && 
                    switch2.value == switch2ExpectedValue && 
                    switch3.value == switch3ExpectedValue && 
                    switch4.value == switch4ExpectedValue && 
                    switch5.value == switch5ExpectedValue
        }" 
        [ngStyle] = "{display: name.value == '' ? 'none': 'block'}">
            <h2>
                The Puzzle |  
                {{switch1.value == switch1ExpectedValue && 
                    switch2.value == switch2ExpectedValue && 
                    switch3.value == switch3ExpectedValue && 
                    switch4.value == switch4ExpectedValue && 
                    switch5.value == switch5ExpectedValue ? 'SOLVED' : 'NOT SOLVED'}}
            </h2>
            <p>Welcome <span class="name">{{name.value}}</span>!!
            <br>
            Switch 1:
            <input type="text" #switch1 (keyup)="0"><br>
            Switch 2:
            <input type="text" #switch2 (keyup)="0"><br>
            Switch 3:
            <input type="text" #switch3 (keyup)="0"><br>
            Switch 4:
            <input type="text" #switch4 (keyup)="0"><br>
            Switch 5:
            <input type="text" #switch5 (keyup)="0"><br>
        </section>
        <h2 [hidden] = "switch1.value != switch1ExpectedValue || 
                    switch2.value != switch2ExpectedValue || 
                    switch3.value != switch3ExpectedValue || 
                    switch4.value != switch4ExpectedValue || 
                    switch5.value != switch5ExpectedValue">Congratulations {{name.value}}, you did it!</h2>
    `,
    
})
export class PuzzleComponent implements OnInit {
    switch1ExpectedValue:number;
    switch2ExpectedValue:number;
    switch3ExpectedValue:number;
    switch4ExpectedValue:number;
    switch5ExpectedValue:number;
    
    ngOnInit():any {
        this.switch1ExpectedValue = Math.round(Math.random());
        this.switch2ExpectedValue = Math.round(Math.random());
        this.switch3ExpectedValue = Math.round(Math.random());
        this.switch4ExpectedValue = Math.round(Math.random());
        this.switch5ExpectedValue = Math.round(Math.random());
        
        console.log(this.switch1ExpectedValue);
        console.log(this.switch2ExpectedValue);
        console.log(this.switch3ExpectedValue);
        console.log(this.switch4ExpectedValue);
        console.log(this.switch5ExpectedValue);
        
    }
    
    
}