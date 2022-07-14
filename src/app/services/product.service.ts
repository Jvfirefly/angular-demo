import { Injectable } from '@angular/core';
import { Product } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: "id1",
      title: "Apple",
      description: "green",
      price: 2
    },
    {
      id: "id2",
      title: "Milk",
      description: "cow milk",
      price: 5
    },
    {
      id: "id3",
      title: "Oil",
      description: "olive oil",
      price: 10
    }
    ,{
      id: "id4",
      title: "Kiwi",
      description: "green",
      price: 2
    }
  ];
  
  constructor() { }

  serviceCall() {
    console.log('This is a service call');
  }

  getProducts() {
    return this.products;
  }

}
