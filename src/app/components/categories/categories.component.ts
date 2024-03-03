import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  allProducts:Product[] = [];
  ratings=[1,2,3,4,5];
  constructor(private product:ProductService){

  }
  ngOnInit(): void {
    this.product.getAllProducts().subscribe(res=>{
      this.allProducts = res;
    });
  }


}
