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
 
 
   
    let autorizacao = localStorage.getItem('ativo');
    let idUsuario = localStorage.getItem('idUsuario');
    let mensagemEnvio = localStorage.getItem('envio')
    let funcaoUsuario = localStorage.getItem('funcao')
    let usuario  = localStorage.getItem('usuario')
    window.localStorage.clear();    
    window.localStorage.setItem('ativo', autorizacao!);
    window.localStorage.setItem('idUsuario', idUsuario!);
    window.localStorage.setItem('funcao', funcaoUsuario!);
    window.localStorage.setItem('usuario', usuario!);

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
