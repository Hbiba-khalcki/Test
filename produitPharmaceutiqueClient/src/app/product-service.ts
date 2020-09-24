import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  //const baseUrl = 'http://localhost:8080/products';

  
  
    constructor(private http: HttpClient) { }
  
    getAll(): Observable<any> {
      return this.http.get(`http://localhost:8080/products`);
    }
  
    get(id): Observable<any> {
      return this.http.get(`http://localhost:8080/products/${id}`);
    }
  
    create(data): Observable<any> {
      return this.http.post(`http://localhost:8080/products`, data);
    }
  
  
    findByName(name): Observable<any> {
      return this.http.get(`http://localhost:8080/products/searchbyname/${name}`);
    }
    findByCode(code): Observable<any> {
      return this.http.get(`http://localhost:8080/products/searchbycode/${code}`);
    }
  
}
