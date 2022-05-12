import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { IProduct } from '../catalog/product.model';
import { IUser } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent implements OnInit {
  cart: IProduct[] = [];
  showSignOutMenu: boolean = false;
  user: IUser | null = null;

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.cartService.getCart().subscribe({
      next: (newCart) => (this.cart = newCart),
    });
    this.userService.getUser().subscribe({
      next: (user) => (this.user = user),
    });
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userService.signOut();
    this.showSignOutMenu = false;
  }
}
