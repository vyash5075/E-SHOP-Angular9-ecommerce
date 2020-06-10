import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit {

  users$;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.collectAllUsers()
  }


  collectAllUsers(){
    this.users$ = this.userService.getAll()
  }

}
