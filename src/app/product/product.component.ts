import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductRepository } from './product.repository';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  pageTitle="Herbal plants"
  products:IProduct[]=[];
  repo:ProductRepository=new ProductRepository();

  imageWidth=70;
  imageMargin=2;
  showImage:boolean=false;


  toggleImage(){
    this.showImage=!this.showImage;
  }

getProducts():IProduct[]
{
  this.products= this.repo.getProducts();
  return this.products;
}


getProduct(id:number):IProduct {
 return  this.repo.getProductById(id);
}

getClasses(id:number):string{
  let product=this.getProduct(id);
  return "p-2 " + (product.price <100 ? "bg-info" : "bg-danger");
}

getStyles(key:number) {
  let product =this.getProduct(key);
  return {
    fontSize:"30px",
    "margin.px": 100,
    color : product.price >100 ?"yellow" : "blue"

  }
}

  selectedProduct: string="";

  getSelected(product: IProduct) :boolean{
    return product.productName ==this.selectedProduct;
  }

}


