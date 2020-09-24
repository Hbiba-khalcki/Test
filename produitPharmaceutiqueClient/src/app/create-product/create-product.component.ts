import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product-service';
import { Product } from './../product';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

 
  product: Product = new Product();
  submitted = false;
  today=new Date();
  dateSent:Date;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  saveProduct(): void {
    
    const data = {
      name: this.product.name,
      code: this.product.code,
      price: this.product.price,
      validityDate: this.product.date
    };
    this.dateSent=new Date(data.validityDate);
    console.log()
    if(data.name!="" && data.code!=""&&data.price!=null && this.dateSent>this.today){
    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;

        },
        error => {
          console.log(error);
        });
      }
  }

  newProduct(){
    this.submitted=false;
    this.product;
  }
 
}

