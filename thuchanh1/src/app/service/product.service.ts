import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = `${environment.API}`;

  constructor(private http: HttpClient) { }
  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API + '/product/list');
  }
  create(product: Product): Observable<Product> {
    return  this.http.post<Product>(this.API + '/product/create', product);

  }
  edit(id: number , product: Product): Observable<Product>{
    return  this.http.put<Product>(this.API + '/product/edit/' + id , product);
  }
  delete(id: number): Observable<Product>{
    return this.http.delete<Product>(this.API + '/product/delete/' + id);
  }
findByName(name: string): Observable<Product[]>{
  return this.http.get<Product[]>(this.API + '/product/' + name);
}
findbyId(id: number): Observable<Product>{
    return this.http.get<Product>(this.API + '/product/find/' + id);
}

}
