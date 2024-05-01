import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private productService: ProductsService){
    
  }

  ngOnInit(): void {
    this.productService.sharedValue.next('updating from home');
  }
  
}
