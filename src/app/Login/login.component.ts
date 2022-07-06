import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailLogin: string = '';
  senhaLogin: string = '';


  constructor(private router: Router, private loginService: LoginService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  btnEntrar() {
    if (this.realizarLogin(this.emailLogin, this.senhaLogin)) {
      this.router.navigate(['/inicio']);
    }

  }
  realizarLogin(email: string, senha: string) {
    //remover esse parametro após subida da API    
    localStorage.setItem('autorizado', 'true');


    let auth = false
    this.router.navigate(['/inicio']);
    this.loginService.VerificarLogin().subscribe(login => {
      if (login.autorizado) {
        auth = true;
        localStorage.setItem('autorizado', 'true');
        this.router.navigate(['/inicio']);
      }


    }, err => {
      console.log("ocorreu um erro!", err);
    });

    return auth;
  }




}
