import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Asegúrate de importar esto
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Importa RouterModule aquí
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  listProduct: Product[] = [
    { id: 1, name: 'CocaCola', description: 'Bebida', price: 2000, stock: 10 },
    { id: 2, name: 'Cerveza', description: 'Bebida', price: 5000, stock: 30 }
  ];
  constructor() {}

  ngOnInit(): void {

  }
}
