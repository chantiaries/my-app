import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public message:string = 'electric car is going to introduce in 2025';
  
  constructor() { }
}
