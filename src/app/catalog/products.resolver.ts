import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<IProduct[]> {
  constructor(private productService: ProductService) {}

  resolve(): Observable<IProduct[]> {
    return this.productService.getProducts();
  }
}
