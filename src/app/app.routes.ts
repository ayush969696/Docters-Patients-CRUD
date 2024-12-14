import { Routes } from '@angular/router';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { DocterListComponent } from './Components/docter-list/docter-list.component';
import { DocterComponent } from './Components/docter/docter.component';
import { LoginformComponent } from './Components/loginform/loginform.component';
import { PatientListComponent } from './Components/patient-list/patient-list.component';

export const routes: Routes = [
       { path: "login", component: LoginformComponent},
       { path: "create-user", component: CreateUserComponent},
       { path: "docters", component: DocterComponent },
       { path: "docter-list", component:DocterListComponent },
       { path: "patient-list", component: PatientListComponent}
];
