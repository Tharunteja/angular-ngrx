import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  //sharedValue = new EventEmitter<string>();
  // sharedValue: Subject<string> = new Subject();
  sharedValue: BehaviorSubject<string> = new BehaviorSubject('hello');
  // sharedValue: ReplaySubject<string> = new ReplaySubject();

  // getSharedValue(){
  //   return this.sharedValue;
  // }

  // setSharedValue(value: any) {
  //   this.sharedValue.next(value);
  //   this.sharedValue.next('updated again from home');
  // }

  getProducts(){
    const products = this.http.get('https://dummyjson.com/products');
    return products;
  }

  getProduct(id: number){
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

}
