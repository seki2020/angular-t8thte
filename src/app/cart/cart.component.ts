import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  items = this.cartService.getItems()

  onSubmit() {
    this.cartService.clearCart()
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset()
  }

}
