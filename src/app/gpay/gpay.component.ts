import { Component, OnInit } from '@angular/core';
import { HdfcService } from '../hdfc.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css'],
})
export class GpayComponent implements OnInit {

  public amount:number=0

  constructor(private _hdfcservices: HdfcService) {}

  ngOnInit(): void {

  }

  withdraw() {
    this._hdfcservices.withdraw(this.amount);
  }
  deposit() {
    this._hdfcservices.deposit(this.amount);
  }
  showBalance() {
    alert(this._hdfcservices.getbalance());
  }
}
