import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-pulso',
  templateUrl: './form-pulso.component.html',
  styleUrls: ['./form-pulso.component.css'],
  providers: [MessageService]
})
export class FormPulsoComponent implements OnInit {


  
    pulsos: number = 0;
    tempoPulsos: number = 0;

    constructor(private router: Router,private messageService: MessageService) { }


  ngOnInit(): void {
  }


  btnContinuar() {    
    if(this.validarValoresTela( this.pulsos, this.tempoPulsos)){
        this.router.navigate(['/formulario/volume']);}
  }

  validarValoresTela(nPulso: number,tPulso: number){
    let erro = false;  
    
    
    if(nPulso === 0){
      erro = true;
    this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Número de Pulsos!'})}


    if(tPulso === 0){
      erro = true;
    this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Tempo de Pulsos!'})
    }

    return !erro;

  }

}
