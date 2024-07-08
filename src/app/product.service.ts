import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Shirt', description: 'A nice shirt', price: 29.99, imageUrl: 'path/to/image' },
    { id: 2, name: 'Pants', description: 'Comfortable pants', price: 49.99, imageUrl: 'path/to/image' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
