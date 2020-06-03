import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { routing, appRoutingProviders } from './app.routing';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { RegisterCommerceComponent } from './components/register-commerce/register-commerce.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { ClientService } from './services/client.service';
import { CommerceService } from './services/commerce.service';
import { IdentityGuard } from './services/identity.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterClientComponent,
    RegisterCommerceComponent,
    HomeComponent,
    ErrorComponent,
    CategoryNewComponent,
    CategoryDetailComponent,
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
