import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './model/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myVar = 'Hola Mundo';
  saludo = "Hola que tal soy Carlos";
  users: User[] = [];

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getAll().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }
}
