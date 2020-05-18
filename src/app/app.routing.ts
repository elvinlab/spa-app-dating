import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import{HomeComponent} from './components/home/home.component';
import{LoginComponent} from './components/login/login.component';
import{ErrorComponent} from './components/error/error.component';
import{RegisterComponent} from './components/register/register.component';
//lab2
import{UsersComponent} from './components/users/users.component';
import{CategoriesComponent} from './components/categories/categories.component';
import{PostsComponent} from './components/posts/posts.component';


const appRoutes: Routes=[
  {path:'',component:HomeComponent},
  {path:'inicio',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegisterComponent},
  //Lab2
  {path:'users',component:UsersComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'posts',component:PostsComponent},

  {path:'**',component:ErrorComponent}
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
