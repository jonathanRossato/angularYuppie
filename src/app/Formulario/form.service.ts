import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Formulario } from './formulario';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class FormService {
  private actionRoute: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     'accept':'text/plain'
    })
  };
  constructor(private http: HttpClient, private router: Router) {
    // this.actionRoute = environment.URL_API
    this.actionRoute = "https://yuppieformapi.herokuapp.com/api/Formulario";
    // this.actionRoute = "https://localhost:44325/api/Formulario"
  }
  form: Formulario;

  saveForm() {

    const formulario: Formulario = {
      Estufas: window.localStorage.getItem('estufas')?.toString()!,
      Climas: window.localStorage.getItem('climas')?.toString()!,
      DataHora: new Date(Date.parse(window.localStorage.getItem('dataHora')!.toString()))!,
      Temperatura: parseFloat(window.localStorage.getItem('temperatura')!),
      Umidade: parseFloat(window.localStorage.getItem('umidade')!),
      QtdPulsos: parseFloat(window.localStorage.getItem('nPulso')!),
      TempoPulso: parseFloat(window.localStorage.getItem('tPulso')!),
      VolInjetado: parseFloat(window.localStorage.getItem('volumeInjetado')!) * 1000,
      VolDrenado: parseFloat(window.localStorage.getItem('volumeDrenado')!) * 1000,
      EcInjetado: parseFloat(window.localStorage.getItem('ecInjetado')!),
      EcDrenado: parseFloat(window.localStorage.getItem('ecDrenado')!),
      PhDrenado: parseFloat(window.localStorage.getItem('phDrenado')!),
      PhInjetado: parseFloat(window.localStorage.getItem('phInjetado')!),
      PercDrenado: parseFloat(window.localStorage.getItem('percDrenado')!),
      idUsuario: parseInt(window.localStorage.getItem('idUsuario')!)
    }
    var json = JSON.stringify(formulario);

    this.EnviarFormulario(formulario).subscribe((data: boolean) => {
      debugger;
      if (data) {
        localStorage.setItem('envio', 'true');
        this.router.navigate(['/inicio']);
      }
      else {
        localStorage.setItem('envio', 'false');
      }


      return data;
    }, erro => {

      debugger;
      localStorage.setItem('envio', 'false');
      return false
    });

  }




  private tratarErro(error: Response) {
    return throwError(error || 'Erro no servidor')
  }

 

  post(endpoint: string,formulario: Formulario) {
    let url = this.actionRoute;
    return this.http.post<Formulario>(url + endpoint, formulario,this.httpOptions)
      .pipe(catchError(this.tratarErro));
  }

  get(endpoint: string) {
    let url = this.actionRoute;
    return this.http
      .get<Array<Formulario>>(url + endpoint, {})
      .pipe(catchError(this.tratarErro));
  }

  EnviarFormulario(formulario: Formulario): Observable<any> {
    return this.post('/Envio',formulario);
  }

  BuscaFormularios(){   
    return this.get('/ListarTodos');
  }

}
