import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToActive(id);
  }

  onSetToActive(id: number) {
    this.usersService.setToInactive(id);
  }
}
