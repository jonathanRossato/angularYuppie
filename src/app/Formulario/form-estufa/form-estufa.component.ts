import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-form-estufa',
  templateUrl: './form-estufa.component.html',
  styleUrls: ['./form-estufa.component.css'],   
  providers: [MessageService]
})
export class FormEstufaComponent implements OnInit {

  valoresSelecionadosEstufa: string[] = []; 
  dataHora: Date = new Date();
  
  constructor(private router: Router,private messageService: MessageService) { }

  ngOnInit(): void {
   
  }


  btnContinuar() {    
    if(this.validarValoresTela(this.valoresSelecionadosEstufa, this.dataHora)){
        this.router.navigate(['/formulario/clima']);}
  }

  validarValoresTela(estufas:string[],dataHora: Date){
    if(estufas.length > 0)
      return true;
    else{
      this.mostarErro();
      console.log('error');
      return false;
    }
    
  }

  mostarErro() {this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preencha o campo: Estufas!'});
}

//TODO: verificar como fazer o snapshot dos valoers ja preenchidos
  validarValoresAnteriores(valor:string){
    if(this.valoresSelecionadosEstufa.some(x => x === valor)) 
      return true 

      return false
  }
  

}
