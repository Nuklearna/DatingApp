import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegisterEvent = new EventEmitter();
  signUpTitle = "Sign up here";
  registerTitle = "Register";
  cancelTitle = "Cancel";
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.model);
  }

  cancelRegister() {
    this.cancelRegisterEvent.emit(false);
  }

}
