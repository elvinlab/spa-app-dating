import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { routing, appRoutingProviders } from './app.routing';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppComponent } from './app.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { RegisterCommerceComponent } from './components/register-commerce/register-commerce.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { ClientService } from './services/client.service';
import { CommerceService } from './services/commerce.service';
import { IdentityGuard } from './services/identity.guard';
import { LoginClientComponent } from './components/login-client/login-client.component';
import { LoginCommerceComponent } from './components/login-commerce/login-commerce.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { CommerceEditComponent } from './components/commerce-edit/commerce-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterClientComponent,
    RegisterCommerceComponent,
    HomeComponent,
    ErrorComponent,
    CategoryNewComponent,
    CategoryDetailComponent,
    LoginClientComponent,
    LoginCommerceComponent,
    ClientEditComponent,
    CommerceEditComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFileUploaderModule
    
  ],
  providers: [
    appRoutingProviders,
    IdentityGuard,
    ClientService,
    CommerceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
