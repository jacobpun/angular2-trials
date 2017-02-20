import { Routes, RouterModule } from "@angular/router"
import { PeopleComponent } from './people/people.component'
import { PERSON_ROUTES } from './people/person.routes'


const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/people', pathMatch: 'full'},
    {path: 'people', component: PeopleComponent, children: PERSON_ROUTES}
]

export const routing = RouterModule.forRoot(APP_ROUTES);