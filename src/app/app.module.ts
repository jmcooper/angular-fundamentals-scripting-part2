import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { RegisterComponent } from './user/register/register.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteHeaderComponent,
    CatalogComponent,
    CartComponent,
    ProductDetailsComponent,
    SignInComponent,
    RegisterComponent,
    TemplateFormControlsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
