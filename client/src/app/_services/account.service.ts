import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://localhost:5001/api";

  constructor(private htttp: HttpClient) { }

  login(model: any) {
    return this.htttp.post(this.baseUrl + "/account/login", model);
  }
}
