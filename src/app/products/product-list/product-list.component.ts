import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  imageUrl: string;
  products: Observable<any>;

  constructor(private productsService: ProductsService) {
    this.imageUrl = environment.imageUrl;
    this.products = this.productsService.getProducts();
  }

  ngOnInit() {
  }

  getImageSrc(product) {
    return `${this.imageUrl}/${product.images[0].url}`;
  }

  getDataGroups(product) {
    return `["${product.category}"]`;
  }
}
