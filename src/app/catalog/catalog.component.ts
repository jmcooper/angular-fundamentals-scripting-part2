import { Component, OnInit } from '@angular/core';

import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.route.snapshot.data['products'];

    this.cartService.getCart().subscribe({
      next: (cart) => (this.cart = cart),
    });

    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
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

    this.router.navigate(['/cart']);
  }
}
