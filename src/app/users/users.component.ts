import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[];
  constructor(private _mydata: DataserviceService) { }

  ngOnInit() {
    this._mydata.jasonData().subscribe(res =>this.users = res);
  }

}