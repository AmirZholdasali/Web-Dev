import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  products = input<Product[]>([]);
  productDeleted = output<number>();

  onDelete(productId: number): void {
    this.productDeleted.emit(productId);
  }
}
