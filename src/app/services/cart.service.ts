import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getAllItems() : CartItem[]{
    const data = localStorage.getItem("cart");
    let cartItems: CartItem[] = [];
    if(data){
      cartItems = JSON.parse(data!);
    }
    return cartItems;
  }
  addItem(item:CartItem){
    const data = localStorage.getItem("cart");
    let cartItems: CartItem[] = [];
    if(data){
      cartItems = JSON.parse(data!);
      var index = cartItems.findIndex(obj=>obj.id = item.id);
      if(index != -1){
        cartItems[index].quantity += 1;
      }else{
        cartItems.push(item);
      }
    }else{
      cartItems.push(item);
    }

    localStorage.setItem("cart",JSON.stringify(cartItems));
  }
  updateItem(item:CartItem){
    const data = localStorage.getItem("cart");
    let cartItems: CartItem[] = [];
    if(data){
      cartItems = JSON.parse(data!);
      var index = cartItems.findIndex(obj=>obj.id = item.id);
      if(index != -1){
        cartItems[index].quantity = item.quantity;
      }
    }

    localStorage.setItem("cart",JSON.stringify(cartItems));
  }
  removeItem(item:CartItem){
    const data = localStorage.getItem("cart");
    let cartItems: CartItem[] = [];
    if(data){
      cartItems = JSON.parse(data!);
      var index = cartItems.findIndex(obj=>obj.id = item.id);
      if(index == -1){
        return;
      }else{
        let updatedList = cartItems.filter(obj=>obj.id != item.id);
        cartItems = updatedList;
      }
    }
    localStorage.setItem("cart",JSON.stringify(cartItems));
  }
}
