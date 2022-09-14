import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: Users[] = [];

  constructor(private _usersservice: UsersService) {
    this._usersservice.getitems().subscribe(
      (data:any)=>{
        this.users=data;
      },
       (err: any)=>{
          alert('internal server error');
      }
    );
  }

  ngOnInit(): void {}
}
