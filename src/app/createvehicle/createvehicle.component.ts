import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent implements OnInit {
  [x: string]: any;

  public VehicleForm: FormGroup = new FormGroup({
    vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl()
  })


  constructor(private _vehicleService:VehicleService) { }

  ngOnInit(): void {
  }

submit(){
  console.log( this.VehicleForm.value );

  this._vehicleService .createvehicle(this.VehicleForm.value).subscribe(

  (data:any)=>{
    alert('created sucessfully !!!!');
  },
  (err:any)=>{
    alert('internal server error');
  
  }

  )
  
}

}
