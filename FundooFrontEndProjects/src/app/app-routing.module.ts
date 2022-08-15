import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent  } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './Components/icons/icons.component';

const routes: Routes = [
  {path : 'register', component : RegistrationComponent},
  {path : 'login', component : LoginComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  {path : 'dashboard', component : DashboardComponent ,
  
   children:[
    { path:'', redirectTo:"note", pathMatch:'full' },
    {path:'note', component : GetAllNotesComponent},
    
   ]},
   { path:'icons',component:IconsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
