import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems : CartItem[] = [];

  constructor(private cartService:CartService,private toast:ToastrService,private nav:Router){
    
  }
  ngOnInit(): void {
    this.cartItems = this.cartService.getAllItems();
  }
  
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  updateQuantity(item:CartItem): void {
    if(item.quantity > 0){
      this.cartService.updateItem(item);
      this.cartItems = this.cartService.getAllItems();
      setTimeout(()=>{
        this.toast.success('Item Updated');
      },500)
    }
  }

  removeItem(item:CartItem): void {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.getAllItems();
    setTimeout(()=>{
      this.toast.success('Item Removed');
    },500)

    if(this.cartItems.length < 1){
      this.nav.navigateByUrl('/home');
    }
    
  }
}
