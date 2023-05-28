import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Observable, of } from 'rxjs';
import { Product } from './models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  constructor(private productsDataService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsDataService.getAllProducts();
  }
}
