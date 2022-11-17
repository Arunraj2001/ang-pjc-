import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpReactiveComponent } from './add-emp-reactive/add-emp-reactive.component';
import { AddempComponent } from './addemp/addemp.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { InterfaceComponent } from './interface/interface.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'service',
    component: InterfaceComponent
  },
  {
    path: 'about',
    component: AddstudentComponent
  },
  {
    path: 'addemp',
    component: AddempComponent

  },
  {
    path:'add-empreac',component:AddEmpReactiveComponent
  },

  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
