import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
  getProducts(productId:number){
    return this.http.get<Product>(`https://fakestoreapi.com/products/${productId}`);
  }
}
