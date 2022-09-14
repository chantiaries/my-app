import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';


@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private _HttpClient: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this._HttpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1'
    );
  }
  getsortedVehicles(column: string, order: string): Observable<Vehicle[]> {
    return this._HttpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?sortBy=' +
        column +
        '&order=' +
        order
    );
  }
  getfilteredVehicles(filterTerm: string): Observable<Vehicle[]> {
    return this._HttpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?filter=' +
        filterTerm
    );
  }
  getpageVehicles(pageno: number): Observable<Vehicle[]> {
    return this._HttpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?limit=10&page=' +
        pageno
    );
  }

  createvehicle( vehicle: Vehicle ): Observable<Vehicle> {
    return this._HttpClient.post<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction', vehicle 
    );
  }

  deleteVehicle(id: string): Observable<Vehicle> {
    return this._HttpClient.delete<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '/' +
        id
    );
  }
}
