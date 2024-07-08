import { Injectable } from '@angular/core';
import { CartItem } from './models/cart-item';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(product: Product) {
    const item = this.items.find(i => i.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  removeFromCart(productId: number) {
    const index = this.items.findIndex(i => i.product.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}
