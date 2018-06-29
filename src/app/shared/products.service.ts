import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.apiUrl}/products?_sort=createdAt:desc`);
  }
}
