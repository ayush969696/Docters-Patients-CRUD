import { Routes } from '@angular/router';
import { CreatePageMasterComponent } from './Components/create-page-master/create-page-master.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { DocterListComponent } from './Components/docter-list/docter-list.component';
import { DocterComponent } from './Components/docter/docter.component';
import { GetAllPageMasterlistComponent } from './Components/get-all-page-masterlist/get-all-page-masterlist.component';
import { LoginformComponent } from './Components/loginform/loginform.component';
import { PatientListComponent } from './Components/patient-list/patient-list.component';
import { UpdatePageMasterComponent } from './Components/update-page-master/update-page-master.component';

export const routes: Routes = [
       { path: "login", component: LoginformComponent},
       { path: "docters", component: DocterComponent },
       { path: "docter-list", component:DocterListComponent },
       { path: "patient-list", component: PatientListComponent},
       { path: "page-master-api", component: GetAllPageMasterlistComponent},
       { path: "create-page-master", component: CreatePageMasterComponent},
       { path: 'update-page-master/edit/:id', component: UpdatePageMasterComponent},


];
