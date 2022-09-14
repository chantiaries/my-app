import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private _HttpClient: HttpClient) {}
  getAccounts(){
      return this._HttpClient.get(
        'https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
    
  }
}
