import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegistrationComponent } from './Auth/registration/registration.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { WelcomeComponent } from './Home/welcome/welcome.component';
import { EditComponent } from './Dashboard/edit/edit.component';
import { CreateComponent } from './Dashboard/create/create.component';
import { ContentComponent } from './Dashboard/content/content.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { PNFComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {path:'', component:HomepageComponent, title:'home'},
    {path: 'home', component:WelcomeComponent , title:'Welcome'},
    {path: 'register', component:RegistrationComponent , title:'Create Your Account'},
    {path: 'login', component:LoginComponent , title:'Login'},
    {path: 'edit', component:EditComponent , title:'Editing Page'},
    {path: 'create', component:CreateComponent , title:'Creating Post'},
    {path: 'content', component:ContentComponent , title:'Content'},
    {path: 'dashboard', component:DashboardComponent , title:'Dashboard'},
    {path:'**', component:PNFComponent,title:'Error page'}

];
