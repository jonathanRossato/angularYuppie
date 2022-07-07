import { Injectable, OnInit } from '@angular/core';
import { Form } from './formulario';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  form: Form;

  saveForm() {
    const formulario: Form = {
      estufas: window.localStorage.getItem('estufas')!,
      climas: window.localStorage.getItem('climas')!,
      temperatura: parseFloat(window.localStorage.getItem('temperatura')!),
      umidadeAR: parseFloat(window.localStorage.getItem('umidade')!),
      numeroPulso: parseFloat(window.localStorage.getItem('nPulso')!),
      tempoPulso: parseFloat(window.localStorage.getItem('tPulso')!),
      volInjetado: parseFloat(window.localStorage.getItem('volumeInjetado')!),
      volDrenado: parseFloat(window.localStorage.getItem('volumeDrenado')!),
      ecInjetado: parseFloat(window.localStorage.getItem('ecInjetado')!),
      ecDrenado: parseFloat(window.localStorage.getItem('ecDrenado')!),
      phDrenado: parseFloat(window.localStorage.getItem('phDrenado')!),
      phInjetado: parseFloat(window.localStorage.getItem('phInjetado')!),
      percDrenado: parseFloat(window.localStorage.getItem('percDrenado')!)
    }

    console.log(formulario);

  }
  getFormularioPreenchido() {

  }
}
