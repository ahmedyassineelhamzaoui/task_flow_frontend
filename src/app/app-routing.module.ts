import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { TaskComponent } from './dashboard-layout/component/task/task.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent },
  { path: '', component: TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
