import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [MessageService]
})
export class InicioComponent implements OnInit {

  constructor(private router: Router, private primengConfig: PrimeNGConfig, private messageService: MessageService) { }
 

  ngOnInit(): void {
    this.primengConfig.ripple = true;
 
 
   
    let autorizacao = localStorage.getItem('autorizado');
    let idUsuario = localStorage.getItem('idUsuario');
    let mensagemEnvio = localStorage.getItem('envio')
    window.localStorage.clear();    
    window.localStorage.setItem('autorizado', autorizacao!);
    window.localStorage.setItem('idUsuario', idUsuario!);

    setTimeout(() => {
      this.verificarNotificação(mensagemEnvio!);
    }, 1000);
    
  }


  verificarNotificação(mensagemEnvio: string){
  
    if(mensagemEnvio === 'true'){
      this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Formulário enviado!'});
    }else if(mensagemEnvio === 'false') {
      this.messageService.add({severity:'error', summary: 'Erro', detail: 'Formulário não enviado!'});
    } 


   

 
  }



}
