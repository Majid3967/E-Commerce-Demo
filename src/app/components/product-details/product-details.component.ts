import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  productId:any=0;
  product!:Product;
  ratings=[1,2,3,4,5];
  constructor(private route: ActivatedRoute, private productService:ProductService) {
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');

    this.productService.getProducts(this.productId).subscribe(res=>{
      this.product = res;
    });
    console.log(this.product)
  }

}
