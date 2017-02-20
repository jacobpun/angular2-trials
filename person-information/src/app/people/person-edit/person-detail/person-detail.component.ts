import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../people-list/person';
import { PersonService } from '../person.service'
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'pi-person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent implements OnInit, OnDestroy {  

  private selectedPerson:Person = null;
  private subscription:Subscription;
  private selectedPersonIndex: string;

  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute, private route:Router) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params:any) => {
        this.selectedPersonIndex = params['id'];
        this.personService.get(this.selectedPersonIndex).subscribe(
          data => {
            this.selectedPerson = data;
            console.log(this.selectedPerson);
          },
          error => console.error(error)
        );
      }
    );
  }

  onEditClick() {
    this.personService.personToEdit = this.selectedPerson;
    this.route.navigate([ '/people', this.selectedPersonIndex, 'edit' ]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  
  }
}