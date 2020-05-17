import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import{HomeComponent} from './components/home/home.component';
import{LoginComponent} from './components/login/login.component';
import{ErrorComponent} from './components/error/error.component';
import{RegisterComponent} from './components/register/register.component';


const appRoutes: Routes=[
  {path:'',component:HomeComponent},
  {path:'inicio',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegisterComponent},

  {path:'**',component:ErrorComponent}
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
