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
import { CommerceDetailComponent } from './components/commerce-detail/commerce-detail.component';
import { AppointmentNewComponent } from './components/appointment-new/appointment-new.component';
import { AppointmentEditComponent } from './components/appointment-edit/appointment-edit.component';
import { AppointmentDetailComponent } from './components/appointment-detail/appointment-detail.component';
import { IdentityGuardClient } from './services/identity-client.guard';
import { IdentityGuardCommerce } from './services/identity-commerce.guard';

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
	{path: 'gestionar-categorias', component: CategoryDetailComponent, canActivate: [IdentityGuardCommerce]},
	{path: 'listar-categorias', component: CategoryDetailComponent, canActivate: [IdentityGuardClient]},
	{path: 'crear-categoria', component: CategoryNewComponent, canActivate: [IdentityGuardCommerce]},
	{path: 'editar-categoria/:id', component: CategoryEditComponent, canActivate: [IdentityGuardCommerce]},
	{path: 'gestionar-promociones', component: PromotionDetailComponent, canActivate: [IdentityGuardCommerce]},
	{path: 'listar-promociones', component: PromotionDetailComponent, canActivate: [IdentityGuardClient]},
	{path: 'crear-promocion', component: PromotionNewComponent, canActivate: [IdentityGuardCommerce]},
	{path: 'editar-promocion/:id', component: PromotionEditComponent, canActivate: [IdentityGuardCommerce]},
	{path: 'gestionar-servicios', component: ServiceDetailComponent, canActivate: [IdentityGuardCommerce]},
	{path: 'listar-servicios', component: ServiceDetailComponent, canActivate: [IdentityGuardClient]},
	{path: 'listar-comercios', component: CommerceDetailComponent, canActivate: [IdentityGuardClient]},
	{path: 'crear-servicio', component: ServiceNewComponent, canActivate: [IdentityGuardCommerce]},
	{path: 'editar-servicio/:id', component: ServiceEditComponent, canActivate: [IdentityGuardCommerce]},
	{path: 'crear-cita', component: AppointmentNewComponent, canActivate: [IdentityGuardClient]},
	{path: 'editar-cita/:id', component: AppointmentEditComponent, canActivate: [IdentityGuardClient]},
	{path: 'listar-cita', component: AppointmentDetailComponent, canActivate: [IdentityGuardClient]},
	{path: 'gestionar-cita', component: AppointmentDetailComponent, canActivate: [IdentityGuardCommerce]},
	{path: 'error', component: ErrorComponent},
	{path: '**', component: ErrorComponent}
];

// EXPORTAR CONFIGURACIÓN
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
