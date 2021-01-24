import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  sum: number = 0;
  count: number = this.items.length;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  calculateTotalAmount(){
    this.count = 0;
    this.sum = 0;
    for(var i = 0; this.items.length >= i; i++){
      this.sum = this.sum + this.items[i].price;
      this.count++;
    }
    return this.sum;
  }

  clearCart(){
    this.cartService.clearCart();
    this.sum = 0;
    this.items = this.cartService.getItems();
    this.count = 0;
  }



}
