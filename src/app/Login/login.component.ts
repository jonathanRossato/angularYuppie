import { Component, OnInit } from '@angular/core';
import {PasswordModule} from 'primeng/password';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailLogin: string = '';
  senhaLogin : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
