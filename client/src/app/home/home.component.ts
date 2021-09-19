import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = "Find your soulmate";
  signUpTitle = "Sign up and seek for it!";
  registerTitle = "Register";
  learnMore = "Learn more";
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get("https://localhost:5001/api/users/").subscribe(users => this.users = users);
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
