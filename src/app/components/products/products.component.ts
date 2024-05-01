import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule,FilterByNamePipe],
  providers:[ProductsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  constructor(private productService: ProductsService, private router: Router){}
  filterValue: string = '';
  products: any;
  filterProducts: any;
  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.products;
      this.filterProducts = [...this.products];
    })
  }

  //NOTE: add (keyup) in template
  // onUserChange(){
  //   console.log(this.filterValue);

  //   this.filterProducts = this.products.filter((product: any) => product.title.toLocaleLowerCase().includes(this.filterValue));
  //   console.log(this.products);
  //   return this.products;
  // }

  goToProductDetails(value:number){
    this.router.navigate(['/product', value]);
  }
}
