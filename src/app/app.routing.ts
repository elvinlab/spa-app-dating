// IMPORTS NECESARIOS
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTAR COMPONENTES
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { RegisterCommerceComponent } from './components/register-commerce/register-commerce.component';
import { LoginClientComponent } from './components/login-client/login-client.component';
import { LoginCommerceComponent } from './components/login-commerce/login-commerce.component';
import { HomeComponent } from './components/home/home.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { CommerceEditComponent } from './components/commerce-edit/commerce-edit.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { IdentityGuard } from './services/identity.guard';

// DEFINIR RUTAS
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'inicio', component: HomeComponent},
	{path: 'registro-cliente', component: RegisterClientComponent},
	{path: 'registro-comercio', component: RegisterCommerceComponent},
	{path: 'login-cliente', component: LoginClientComponent},
	{path: 'logout-cliente/:sure', component: LoginClientComponent},
	{path: 'editar-cliente', component: ClientEditComponent},
	{path: 'editar-comercio', component: CommerceEditComponent},
	{path: 'logout-comercio/:sure', component: LoginCommerceComponent},
	{path: 'login-comercio', component: LoginCommerceComponent},
	{path: 'gestionar-categorias', component: CategoryDetailComponent},
	{path: 'crear-categoria', component: CategoryNewComponent, canActivate: [IdentityGuard]},
	{path: 'error', component: ErrorComponent},
	{path: '**', component: ErrorComponent}
];

// EXPORTAR CONFIGURACIÓN
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
