import { Component, OnInit } from '@angular/core';

import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  public filter: string = '';
  private products: IProduct[] = [];
  private cart: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products: IProduct[]) => (this.products = products),
    });

    this.cartService.getCart().subscribe({
      next: (cart) => (this.cart = cart),
    });
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product) => product.category === this.filter);
  }

  addToCart(product: IProduct) {
    let newCart = [...this.cart, product];

    this.cartService.saveCart(newCart);
  }
}
