import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category';
import { Product } from './models/product';
import { CATEGORIES, PRODUCTS } from './data/products.data';
import { ProductListComponent } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  // переменные
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = [...PRODUCTS];
  selectedCategory: Category | null = null;

  get filteredProducts(): Product[] {
    if (!this.selectedCategory) return [];
    return this.allProducts.filter(p => p.categoryID === this.selectedCategory!.id);
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  onProductDeleted(productId: number): void {
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
  }
}
