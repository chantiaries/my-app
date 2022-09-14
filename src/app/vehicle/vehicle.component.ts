import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  public filterterm: string = '';
  public column: string = '';
  public order: string = '';
  public Vehicles: Vehicle[] = [];

  constructor(private _vehicleservice: VehicleService) {
    this._vehicleservice.getVehicles().subscribe(
      (data: any) => {
        this.Vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  ngOnInit(): void {}

  filter() {
    this._vehicleservice.getfilteredVehicles(this.filterterm).subscribe(
      (data: any) => {
        this.Vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }
  sort() {
    this._vehicleservice.getsortedVehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.Vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }
  page(pageno: number) {
    this._vehicleservice.getpageVehicles(pageno).subscribe(
      (data: any) => {
        this.Vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  delete(id: string) {
    this._vehicleservice.deleteVehicle(id).subscribe(
      (data: any) => {
        alert('Deleted successfully !!!!');
        location.reload();
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }
}
