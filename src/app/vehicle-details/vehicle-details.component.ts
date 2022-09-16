import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  public vehicle:Vehicle=<Vehicle>{};

  constructor(private _vehicleService:VehicleService,private _activatedroute:ActivatedRoute) {
    
    this._activatedroute.params.subscribe(
      (data:any)=>{
        this.getVehicle(data.id)
      }
    )

  }

  ngOnInit(): void {
  }

  getVehicle(id:string){
    this._vehicleService.getVehicle(id).subscribe(
      (data:any)=>{
        this.vehicle = data;
      }
    )
  }

}
