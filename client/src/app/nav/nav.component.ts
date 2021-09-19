import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'The Dating App';
  matches = "Matches";
  lists = "Lists";
  messages = "Messages";
  loginTitle = "Login";
  welcome = "Welcome!";
  editProfile = "Edit profile";
  logoutStr = "Logout";
  model: any = {};


  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

  logout() {
    this.accountService.logout();
  }

}
