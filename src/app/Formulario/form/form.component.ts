import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm } from '@angular/forms';
import {MenuItem, PrimeIcons} from 'primeng/api';
import {Form} from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formMonitoramento: FormGroup | undefined;
  valoresEstufa: string[] = [];
  valoresClima:string[] = [];
  
  
    dataHora: Date = new Date();
   
    temperatura: number = 0;
    umidade: number = 0;
    volumeInjetado: number = 0;
    volumeDrenado: number = 0;
    percDrenado: number = 0;
    ecDrenado: number = 0;
    ecInjetado: number = 0;
    phDrenado: number = 0;
    phInjetado: number = 0;
    pulsos: number = 0;
    tempoPulsos: number = 0;


   
  constructor() { }

  ngOnInit(): void {
    this.createForm(new Form())
  }

  createForm(formulario: Form) {
    this.formMonitoramento = new FormGroup({
      dataHora: new FormControl(formulario.dataHora),
      estufa: new FormControl(formulario.estufa),
      clima: new FormControl(formulario.clima),
      temperatura: new FormControl(formulario.temperatura),
      umidade: new FormControl(formulario.umidade),
      volumeInjetado: new FormControl(formulario.volumeInjetado),

      volumeDrenado: new FormControl(formulario.volumeDrenado),
      percDrenado: new FormControl(formulario.percDrenado),
      ecDrenado: new FormControl(formulario.ecDrenado),
      ecInjetado: new FormControl(formulario.ecInjetado),
      
      phDrenado: new FormControl(formulario.phDrenado),
      phInjetado: new FormControl(formulario.phInjetado),
      pulsos: new FormControl(formulario.pulsos),
      tempoPulsos: new FormControl(formulario.tempoPulsos) })
  }

  onSubmit(f: NgForm) {
    
  }

  
}
