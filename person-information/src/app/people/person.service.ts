import { Injectable, EventEmitter } from '@angular/core';
import { Person } from './people-list/person'
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PersonService {

  personListChanged: EventEmitter<Person[]> = new EventEmitter();
  personToEdit: Person = null;

  constructor(private http: Http){}
 
  getAll() {
    let personList: Person[] = [];
    this.http.get('https://person-information.firebaseio.com/person-information.json')
    .map((response: Response) => response.json())
    .subscribe(
      (data:any) => {
        for(let key in data) {
          let person:Person = data[key];
          person.personId = key;
          personList.push(person);
        }
      }
    );
    return personList;
  }

  get(id: string) {
    return this.http.get('https://person-information.firebaseio.com/person-information/' + id + '.json')
    .map((response: Response) => response.json())
  }
  
  add(person:Person) {
    const body = JSON.stringify(person);
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      }
    );
    this.http.post('https://person-information.firebaseio.com/person-information.json', body, {
      headers: headers
    }).subscribe(
        data => {
          console.log(data);
          this.personListChanged.emit(this.getAll());
        },
        error => console.error(error)
      );
  }

  update(id: string, person:Person) {
    const body = JSON.stringify(person);
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      }
    );
    this.http.put('https://person-information.firebaseio.com/person-information/' + id + '.json', body, {
      headers: headers
    }).subscribe(
        data => {
          console.log(data);
          this.personListChanged.emit(this.getAll());
        },
        error => console.error(error)
      );
  }
}