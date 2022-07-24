import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class CadastroUsuarioService {

  private actionRoute: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     'accept':'text/plain'
    })
  };
  
  constructor(private http: HttpClient) { 
    // this.actionRoute = environment.URL_API
    // this.actionRoute = "https://yuppieformapi.herokuapp.com/api/Login/ListarUsuarios";
    this.actionRoute = "https://localhost:44325/api/Usuario";

    

  }


  ListarUsuarios(): Observable<any> {
    return this.get();
  }

  EditarUsuario(usuario:Usuario): Observable<any> {
    return this.post('/EditarUsuario',usuario);
  }

  CriarUsuario(usuario:Usuario): Observable<any> {
    return this.post('/Criar',usuario);
  }

  get() {
    return this.http
      .get<Usuario>(this.actionRoute + '/ListarUsuarios', {})
      .pipe(catchError(this.tratarErro));
  }

  post(endpoint:string,usuario:Usuario) {
        return this.http
      .post<Usuario>(this.actionRoute+endpoint, usuario,this.httpOptions)
      .pipe(catchError(this.tratarErro));
  }

  private tratarErro(error: Response) {
    return throwError(error || 'Erro no servidor')
  }

}



export interface Usuario {
  idUsuario?: number;
  usuario?: string;
  senha?: string;
  nome?: string;
  sobrenome?: string;
  funcao?: string;
  email?: string;
  ultimoLogin?: Date;
  dataCadastro?: Date;
  ativo?: boolean;
}