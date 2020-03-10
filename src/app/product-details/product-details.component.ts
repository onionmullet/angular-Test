import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {


  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  /*  define cart function for service
  *  Receives the current product.
  *  Uses the cart service's addToCart() method to add the product the cart.
  *  Displays a message that you've added a product to the cart.
  */
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }
}