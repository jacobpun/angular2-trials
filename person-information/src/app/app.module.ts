import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { PeopleComponent } from './people/people.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PersonComponent } from './people/people-list/person.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';
import {routing} from './app.routing';
import { PersonStartComponent } from './people/perosn-start-component/perosn-start.component';
import { PersonEditComponent } from './people/person-edit/person-edit.component';
import { PersonService } from './people/person.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PeopleComponent,
    PeopleListComponent,
    PersonComponent,
    PersonDetailComponent,
    PersonStartComponent,
    PersonEditComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ PersonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
