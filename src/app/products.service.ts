import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    const products = this.http.get('https://dummyjson.com/products');
    return products;
  }

  getProduct(id: number){
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
