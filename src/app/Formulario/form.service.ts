import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Form } from './formulario';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class FormService {
  private actionRoute: string;
  constructor(private http: HttpClient, private router: Router) {

    // this.actionRoute = environment.URL_API
    this.actionRoute = "https://yuppieformapi.herokuapp.com/api/Formulario/Envio?formulario=";
  }
  form: Form;

  saveForm() {

    const formulario: Form = {
      estufas: window.localStorage.getItem('estufas')?.toString()!,
      climas: window.localStorage.getItem('climas')?.toString()!,
      data: new Date(Date.parse(window.localStorage.getItem('dataHora')!.toString()))!,
      temperatura: parseFloat(window.localStorage.getItem('temperatura')!),
      umidadeAR: parseFloat(window.localStorage.getItem('umidade')!),
      numeroPulso: parseFloat(window.localStorage.getItem('nPulso')!),
      tempoPulso: parseFloat(window.localStorage.getItem('tPulso')!),
      volInjetado: parseFloat(window.localStorage.getItem('volumeInjetado')!) * 1000,
      volDrenado: parseFloat(window.localStorage.getItem('volumeDrenado')!) * 1000,
      ecInjetado: parseFloat(window.localStorage.getItem('ecInjetado')!),
      ecDrenado: parseFloat(window.localStorage.getItem('ecDrenado')!),
      phDrenado: parseFloat(window.localStorage.getItem('phDrenado')!),
      phInjetado: parseFloat(window.localStorage.getItem('phInjetado')!),
      percDrenado: parseFloat(window.localStorage.getItem('percDrenado')!),
      idUsuario: parseInt(window.localStorage.getItem('idUsuario')!)
    }
    var json = JSON.stringify(formulario);

    this.EnviarFormulario(json).subscribe((data: boolean) => {
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


  EnviarFormulario(formulario: string): Observable<any> {
    return this.post(formulario);
  }


  post(formulario: string) {
    let url = this.actionRoute + formulario;
    return this.http
      .post<boolean>(url, {})
      .pipe(catchError(this.tratarErro));
  }
}
