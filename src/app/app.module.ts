import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { routing, appRoutingProviders } from './app.routing';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { RegisterCommerceComponent } from './components/register-commerce/register-commerce.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { ClientService } from './services/client.service';
import { CommerceService } from './services/commerce.service';
import { IdentityGuardClient } from './services/identity-client.guard';
import { IdentityGuardCommerce } from './services/identity-commerce.guard';
import { LoginClientComponent } from './components/login-client/login-client.component';
import { LoginCommerceComponent } from './components/login-commerce/login-commerce.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { CommerceEditComponent } from './components/commerce-edit/commerce-edit.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { PromotionNewComponent } from './components/promotion-new/promotion-new.component';
import { PromotionEditComponent } from './components/promotion-edit/promotion-edit.component';
import { PromotionDetailComponent } from './components/promotion-detail/promotion-detail.component';
import { PromotionsListComponent } from './components/promotions-list/promotions-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ServiceNewComponent } from './components/service-new/service-new.component';
import { ServiceEditComponent } from './components/service-edit/service-edit.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { CommerceDetailComponent } from './components/commerce-detail/commerce-detail.component';
import { CommercesListComponent } from './components/commerces-list/commerces-list.component';
import { AppointmentNewComponent } from './components/appointment-new/appointment-new.component';
import { AppointmentEditComponent } from './components/appointment-edit/appointment-edit.component';
import { AppointmentDetailComponent } from './components/appointment-detail/appointment-detail.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterClientComponent,
    RegisterCommerceComponent,
    HomeComponent,
    ErrorComponent,
    CategoryNewComponent,
    LoginClientComponent,
    LoginCommerceComponent,
    ClientEditComponent,
    CommerceEditComponent,
    CategoryDetailComponent,
    CategoryEditComponent,
    FilterPipe,
    PromotionNewComponent,
    PromotionEditComponent,
    PromotionDetailComponent,
    PromotionsListComponent,
    CategoriesListComponent,
    ServiceNewComponent,
    ServiceEditComponent,
    ServiceDetailComponent,
    ServicesListComponent,
    CommerceDetailComponent,
    CommercesListComponent,
    AppointmentNewComponent,
    AppointmentEditComponent,
    AppointmentDetailComponent,
    AppointmentsListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPaginationModule,
    routing,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFileUploaderModule
  ],
  providers: [
    appRoutingProviders,
    IdentityGuardClient,
    IdentityGuardCommerce,
    ClientService,
    CommerceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
