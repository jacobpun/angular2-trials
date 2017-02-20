import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person'

@Component({
  selector: 'pi-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
  @Input() person: Person;


  constructor() { }

  ngOnInit() {
  }
}