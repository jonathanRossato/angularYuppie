import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-form-clima',
  templateUrl: './form-clima.component.html',
  styleUrls: ['./form-clima.component.css'],
  providers: [MessageService]
})
export class FormClimaComponent implements OnInit {
  valoresClima:string[] = [];
  temperatura: number = 0;
  umidade: number = 0;

  constructor(private router: Router,private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }


  btnContinuar() {    
    if(this.validarValoresTela(this.valoresClima, this.temperatura, this.umidade)){
        this.router.navigate(['/formulario/pulso']);}
  }

  validarValoresTela(climas:string[],temperatura: number,umidade: number){
    let erro = false;

    if(climas.length <= 0){
      erro = true;
      this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Clima!'})
    }
    
    
    if(temperatura === 0){
      erro = true;
    this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Temperatura!'})}


    if(umidade === 0){
      erro = true;
    this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Umidade!'})
    }

    return !erro;

  }
  

  
}
