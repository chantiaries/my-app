import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _HttpClient: HttpClient) {}
  getitems(){
    return this._HttpClient.get('https://jsonplaceholder.typicode.com/users');
}
}
