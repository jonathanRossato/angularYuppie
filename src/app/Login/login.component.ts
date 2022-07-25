import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { LoginService, Usuario } from './login.service';
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
    window.localStorage.clear();
  }

  btnEntrar() {
    this.BuscarLogin()
  }


  BuscarLogin() {
    return this.loginService.VerificarLogin(this.emailLogin, this.senhaLogin).subscribe((data: Usuario) => {
  
      let idUsuario = data.idUsuario != undefined? data.idUsuario: '';
      if (data?.ativo === true) {
        debugger;
        localStorage.setItem('ativo', 'true');
        localStorage.setItem('usuario', data.usuario!);
        localStorage.setItem('funcao', data.funcao!);
        localStorage.setItem('idUsuario', idUsuario.toString());
        this.router.navigate(['/inicio']);
      }
    }, erro => { });
  }


}
