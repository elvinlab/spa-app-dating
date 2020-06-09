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
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { PromotionNewComponent } from './components/promotion-new/promotion-new.component';
import { PromotionEditComponent } from './components/promotion-edit/promotion-edit.component';
import { PromotionDetailComponent } from './components/promotion-detail/promotion-detail.component';
import { ServiceNewComponent } from './components/service-new/service-new.component';
import { ServiceEditComponent } from './components/service-edit/service-edit.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
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
	{path: 'listar-categorias', component: CategoryDetailComponent, canActivate: [IdentityGuard]},
	{path: 'crear-categoria', component: CategoryNewComponent, canActivate: [IdentityGuard]},
	{path: 'editar-categoria/:id', component: CategoryEditComponent, canActivate: [IdentityGuard]},
	{path: 'listar-promociones', component: PromotionDetailComponent, canActivate: [IdentityGuard]},
	{path: 'crear-promocion', component: PromotionNewComponent, canActivate: [IdentityGuard]},
	{path: 'editar-promocion/:id', component: PromotionEditComponent, canActivate: [IdentityGuard]},
	{path: 'listar-servicios', component: ServiceDetailComponent, canActivate: [IdentityGuard]},
	{path: 'crear-servicio', component: ServiceNewComponent, canActivate: [IdentityGuard]},
	{path: 'editar-servicio/:id', component: ServiceEditComponent, canActivate: [IdentityGuard]},

	{path: 'error', component: ErrorComponent},
	{path: '**', component: ErrorComponent}
];

// EXPORTAR CONFIGURACIÓN
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
