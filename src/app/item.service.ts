import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private _HttpClient: HttpClient) {}
  getitems(){
    return this._HttpClient.get(
      'https://fakestoreapi.com/products');
    
  }
}
