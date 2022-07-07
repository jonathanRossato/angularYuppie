import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-pulso',
  templateUrl: './form-pulso.component.html',
  styleUrls: ['./form-pulso.component.css'],
  providers: [MessageService,FormService]
})
export class FormPulsoComponent implements OnInit {


  
    pulsos: number = 0;
    tempoPulsos: number = 0;

    constructor(private router: Router,private messageService: MessageService, private primengConfig: PrimeNGConfig) { }


  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.RecuperarValoresTela();
  }


  RecuperarValoresTela(){
        let nPulsoTela = window.localStorage.getItem('nPulso')
    if(nPulsoTela !== "" && nPulsoTela !== undefined && nPulsoTela !== null){       
      this.pulsos = parseInt(nPulsoTela!);      
   }

   let tPulsoTela = window.localStorage.getItem('tPulso')
   if(tPulsoTela !== "" && tPulsoTela !== undefined && tPulsoTela !== null){       
     this.tempoPulsos = parseInt(tPulsoTela!);      
  }
  }


  btnContinuar() {    
    if(this.validarValoresTela( this.pulsos, this.tempoPulsos)){
        this.router.navigate(['/formulario/volume']);}
  }
  btnVoltar() {    
    this.validarValoresTela( this.pulsos, this.tempoPulsos)
        this.router.navigate(['/formulario/clima']);
  }

  validarValoresTela(nPulso: number,tPulso: number){
    let erro = false;  
    
    
    if(nPulso === 0){
      erro = true;
    this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Número de Pulsos!'})}
    else{
      this.set('nPulso',nPulso)     
    }
    

    if(tPulso === 0){
      erro = true;
    this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Tempo de Pulsos!'})
    }
    else{
      this.set('tPulso',tPulso)     
    }
    
    return !erro;

  }


  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

}
