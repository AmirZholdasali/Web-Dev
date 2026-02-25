import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {

  product = input.required<Product>();
  deleteProduct = output<number>();

  like(): void {
    this.product().likes++;
  }

  delete(): void {
    this.deleteProduct.emit(this.product().id);
  }

  share(): void {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product().link)}`;
    window.open(url, '_blank');
  }
}
