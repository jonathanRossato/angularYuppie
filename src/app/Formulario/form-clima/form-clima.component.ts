import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { FormService } from '../form.service';
@Component({
  selector: 'app-form-clima',
  templateUrl: './form-clima.component.html',
  styleUrls: ['./form-clima.component.css'],
  providers: [MessageService,FormService]
})
export class FormClimaComponent implements OnInit {
  valoresClima:string[] = [];
  temperatura: number = 0;
  umidade: number = 0;

  constructor(private router: Router,private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.RecuperarValoresTela();
  }
  RecuperarValoresTela(){
    let climasTela = window.localStorage.getItem('climas')
    if(climasTela !== "" && climasTela !== undefined&& climasTela != null){       
       this.valoresClima.push(...climasTela!.split(','))     
    }

    let tempTEla = window.localStorage.getItem('temperatura')
    if(tempTEla !== "" && tempTEla !== undefined && tempTEla !== null){       
      this.temperatura = parseInt(tempTEla!);      
   }

   let umidadeTela = window.localStorage.getItem('umidade')
   if(umidadeTela !== "" && umidadeTela !== undefined && umidadeTela !== null){       
     this.umidade = parseInt(umidadeTela!);      
  }
  }

  btnContinuar() {    
    if(this.validarValoresTela(this.valoresClima, this.temperatura, this.umidade)){
        this.router.navigate(['/formulario/pulso']);}
  }

  btnVoltar() {    
   this.validarValoresTela(this.valoresClima, this.temperatura, this.umidade)
        this.router.navigate(['/formulario/estufa']);
  }

  validarValoresTela(climas:string[],temperatura: number,umidade: number){
    let erro = false;

    if(climas.length <= 0){
      erro = true;
      this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Clima!'})
    }
    else{
      this.set('climas',climas)     
    }
    
    
    if(temperatura === 0){
      erro = true;
    this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Temperatura!'})}
    else{
      this.set('temperatura',temperatura)     
    }
    

    if(umidade === 0){
      erro = true;
    this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Umidade!'})
    }
    else{
      this.set('umidade',umidade)     
    }
    
    return !erro;

  }
  
  set(key: string, value: any) {
    window.localStorage.setItem(key, value);
  }
  
}
