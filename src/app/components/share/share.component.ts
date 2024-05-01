import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [],
  templateUrl: './share.component.html',
  styleUrl: './share.component.css'
})
export class ShareComponent implements OnInit{
  constructor(private productService: ProductsService){}

  showText: any;
  
  ngOnInit(){
    //console.log('shared value', this.productService.getSharedValue());
    
    this.productService.sharedValue.subscribe((value) => {
      console.log(value);
      this.showText = value;
    });
  }

  
}
