import { Injectable, OnInit } from '@angular/core';
import { Formulario } from './formulario';

@Injectable({
  providedIn: 'root'
})
export class FormService implements OnInit{
 
  form: Formulario;
 
  constructor() { 
      
  }
  ngOnInit(): void {
   
  }

  
 
  saveForm(){
 
    // this.form.estufas = window.localStorage.getItem('estufas')!;

    // if(this.form != null){

    //   console.log(this.form.estufas)
    
    // }
  }
  getFormularioPreenchido(){

  }
}
