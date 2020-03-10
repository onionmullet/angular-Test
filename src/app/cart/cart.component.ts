import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  /* 
  *  The product details component already uses the cart service to add products to *the cart.
  *  This section shows you how to use the cart service to display the products in *the cart.
  * Inject cart service so cart component can use
  */

  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    /* Call cart.service.ts and function getItems */
    this.items = this.cartService.getItems();
  }

}