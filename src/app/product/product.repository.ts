import { IProduct } from "./product.model";

export class ProductRepository{

products: IProduct[] = [
{
"id": 1,
"productName": "Lemongrass",
"productCode": "HLG-0011",
"releaseDate": "March 19, 2021",
"price": 85.95,
"starRating": 3.2,
"imageUrl": "../../assets/images/1.jpg"
},
{
"id": 2,
"productName": "Lavendar",
"productCode": "LAV-0023",
"releaseDate": "March 18, 2021",
"price": 232.99,
"starRating": 4.2,
"imageUrl": "../../assets/images/2.jpg"
},
{
"id": 3,
"productName": "xyz",
"productCode": "xyz-0048",
"releaseDate": "May 21, 2021",
"price":68.9,
"starRating": 4.8,
"imageUrl": "../../assets/images/3.jpg"
}
,
{
"id": 4,
"productName": "abc",
"productCode": "abc-0048",
"releaseDate": "May 21, 2021",
"price":68.9,
"starRating": 4.8,
"imageUrl": "../../assets/images/4.jpg"
}
,
{
"id": 5,
"productName": "zez",
"productCode": "zez-0048",
"releaseDate": "May 21, 2021",
"price":68.9,
"starRating": 4.8,
"imageUrl": "../../assets/images/5.jpg"
}
];


private locator =(p:IProduct,id:number ) => p.id == id;



getProducts():IProduct[] {
return this.products;
}
getProductById(id:number): IProduct{
let res=this.products.find( p => this.locator(p,id));
{
return res as IProduct;
}



}



}