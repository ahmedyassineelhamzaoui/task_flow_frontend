import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { TaskComponent } from './dashboard-layout/components/task/task.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent },
  { path: '', redirectTo: 'tasks' , pathMatch: 'full' },
  { path: 'tasks', component: TaskComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
