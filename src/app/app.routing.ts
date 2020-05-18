import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
//lab2
import{UsersComponent} from './components/users/users.component';
import{CategoriesComponent} from './components/categories/categories.component';
import{PostsComponent} from './components/posts/posts.component';


const appRoutes: Routes=[
  {path: '', component: HomeComponent},
	{path: 'inicio', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'logout', component: LoginComponent},
	{path: 'registro', component: RegisterComponent},
	{path: 'ajustes', component: UserEditComponent},
	{path: 'crear-categoria', component: CategoryNewComponent},
	{path: 'crear-entrada', component: PostNewComponent},
	{path: 'entrada/:id', component: PostDetailComponent},
	{path: 'editar-entrada', component: PostEditComponent},
	{path: 'categoria/', component: CategoryDetailComponent},
	{path: 'perfil', component: ProfileComponent},

   //Lab2
  {path:'users',component:UsersComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'posts',component:PostsComponent},

  {path: 'error', component: ErrorComponent},
  {path:'**',component:ErrorComponent}

];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
