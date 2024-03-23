import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  productId:any=0;
  product!:Product;
  ratings=[1,2,3,4,5];
  constructor(private route: ActivatedRoute, private productService:ProductService,private cartService:CartService,private toast:ToastrService) {
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');

    this.productService.getProducts(this.productId).subscribe(res=>{
      this.product = res;
    });
    console.log(this.product)
  }

  addItemtoCart(item:Product){
    let cartItem:CartItem = {id:item.id,name:item.title,price:item.price,quantity:1};
    this.cartService.addItem(cartItem);
    setTimeout(()=>{
      this.toast.success('Item Added');
    },500)
  }

}
