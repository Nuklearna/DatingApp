import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegisterEvent = new EventEmitter();
  signUpTitle = "Sign up here";
  registerTitle = "Register";
  cancelTitle = "Cancel";
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(res => {
      console.log(res);
      this.cancelRegister();
    }, err => {
      console.log(err);
    })
  }

  cancelRegister() {
    this.cancelRegisterEvent.emit(false);
  }

}
