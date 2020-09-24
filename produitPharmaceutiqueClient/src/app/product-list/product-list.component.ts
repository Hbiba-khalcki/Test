import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Observable } from "rxjs";
import { ProductService } from './../product-service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  searchtext='';
  
    constructor(private productService: ProductService) {}
  
    ngOnInit() {
      this.reloadData();
    }
  
    reloadData(): void {
      this.productService.getAll()
        .subscribe(
          data => {
            this.products = data;
            console.log(this.products);
          },
          error => {
            console.log(error);
          });
    }

    searchbyname(): void {
      if(this.searchtext==''){
        this.reloadData();
      }else{
      this.productService.findByName(this.searchtext)
        .subscribe(
          data => {
            this.products = data;
            console.log(this.products);
          },
          error => {
            console.log(error);
          });
        }
    }
  
}
