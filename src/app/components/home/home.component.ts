import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  allProducts:Product[] = [];

  constructor(private product: ProductService) { }

  async ngOnInit() {
   this.product.getAllProducts().subscribe(res=>{
      this.allProducts = res;
    });
  }

}
