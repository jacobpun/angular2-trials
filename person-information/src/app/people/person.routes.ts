import { Routes, RouterModule } from "@angular/router";
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonStartComponent } from './perosn-start-component/perosn-start.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

export const PERSON_ROUTES: Routes = [
    {path: '', component: PersonStartComponent, pathMatch: 'full'},
    {path: 'new', component: PersonEditComponent, pathMatch: 'full'},
    {path: ':id', component: PersonDetailComponent},
    {path: ':id/edit', component: PersonEditComponent}
]