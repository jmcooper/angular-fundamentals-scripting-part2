import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { RegisterComponent } from './user/register/register.component';
import { CartRouteActivatorGuard } from './cart/cart-route-activator.guard';
import { CartRouteDeactivatorGuard } from './cart/cart-route-deactivator.guard';
import { ProductsResolver } from './catalog/products.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'catalog/:filter',
    component: CatalogComponent,
    resolve: { products: ProductsResolver },
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [CartRouteActivatorGuard],
    canDeactivate: [CartRouteDeactivatorGuard],
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
