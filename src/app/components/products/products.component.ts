import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  providers:[ProductsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  constructor(private productService: ProductsService, private router: Router){}

  products: any;
  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.products;
    })
  }

  goToProductDetails(value:number){
    this.router.navigate(['/product', value]);
  }
}
