import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Person } from '../people-list/person';
import { PersonService } from '../person.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pi-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit, OnDestroy {
  
  private subscription:Subscription;
  private isAdd: boolean = true;
  private personToEdit:Person = null;
  private selectedPersonIndex: string;  
  private personForm: FormGroup;
  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private route:Router) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe (
      (params:any) => {
        if (params['id'] == null) {
          this.isAdd = true;
          this.personToEdit = null;
          this.selectedPersonIndex = "";
        } else {
          this.isAdd = false;
          this.selectedPersonIndex = params['id'] ;
          this.personToEdit = this.personService.personToEdit;
        }
        this.initForm();
      }
    );    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  
  }

  initForm() {
    let name: string = '';
    let email: string = '';
    let imagePath: string = '';
    let description: string = '';
    let gender: string = 'Male';
    
    if (!this.isAdd) {
      name = this.personToEdit.name;
      email = this.personToEdit.email;
      imagePath = this.personToEdit.imagePath;
      description = this.personToEdit.description;
      gender = this.personToEdit.gender;
    }
    
    this.personForm = this.formBuilder.group(
      {
        name: [name, [Validators.required]],
        email: [email],
        description: [description],
        imagePath: [imagePath, Validators.required],
        gender: [gender, Validators.required]
      }
    );
  }

  onSubmit() {
    if(this.isAdd) {
      this.personService.add(this.personForm.value);
    } else {
      this.personService.update(this.selectedPersonIndex, this.personForm.value);
    }
    this.route.navigate(['..']);
  }
}