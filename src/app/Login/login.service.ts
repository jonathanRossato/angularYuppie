import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private actionRoute: string;
  constructor(private http: HttpClient) { 
    // this.actionRoute = environment.URL_API
    // this.actionRoute = "https://yuppieformapi.herokuapp.com/api/Login?";
    this.actionRoute = "https://localhost:44325/api/Login/Logar?"
  }

  VerificarLogin(usuario: string, senha: string): Observable<any> {
    return this.get(usuario,senha);
  }


  get(usuario: string, senha: string) {
    
    let url = this.actionRoute + 'usuario='+usuario+ '&senha='+senha+''
    return this.http
      .get<Usuario>(url, {})
      .pipe(catchError(this.tratarErro));
  }

  async requisicaoLogin(usuario: string, senha: string) {
    let rotas = ['https://yuppieformapi.herokuapp.com/api/Login?usuario='+ usuario + "&senha=" + senha + ""]

  
    await Promise.all(rotas.map(function(url) {
      fetch(url).then(function(resp) {
        return resp.json();
      }).then(function(r) {
        return r;
      })
    }));
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

