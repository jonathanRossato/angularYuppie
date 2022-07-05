import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading = false;
  emailLogin: string = '';
  senhaLogin: string = '';

  constructor(private router: Router,private loginService: LoginService,) { }

  ngOnInit(): void {
  }

  btnEntrar() {    
     if(this.realizarLogin( this.emailLogin,this.senhaLogin)){
         this.router.navigate(['/inicio']);
        }
    
  }
  realizarLogin(email: string, senha: string) {
       this.loading = true;
       let logar = false;
       this.router.navigate(['/inicio']);
    this.loginService.VerificarLogin().subscribe(login => {
       if(login.autorizado)
        this.router.navigate(['/inicio']);
      
    }, err => {
      console.log("ocorreu um erro!", err);
    });
    this.loading = false;
    return logar;
  }
 

 

}
