import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users : any[];

  constructor(private commonService : CommonService) { }

  ngOnInit(): void {
    this.users = this.commonService.userList;
  }

}
