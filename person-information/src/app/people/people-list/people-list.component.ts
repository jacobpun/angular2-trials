import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Person } from './person'
import { PersonService } from '../person.service'

@Component({
  selector: 'pi-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {

  personList: Person[] = [];
  constructor(private personService:PersonService, private route:Router) { }

  ngOnInit() {
    this.personList = this.personService.getAll();   
    this.personService.personListChanged.subscribe(
      (people: Person[]) => this.personList = people
    );
  }

  onAddNewClick() {
    this.route.navigate(['/people/new']);
  }
}