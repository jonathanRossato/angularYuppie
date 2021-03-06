import { Component, OnInit,Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { FormService } from '../form.service';


@Component({
  selector: 'app-form-volume',
  templateUrl: './form-volume.component.html',
  styleUrls: ['./form-volume.component.css'],
  providers: [MessageService, FormService]
})
export class FormVolumeComponent implements OnInit {
  @Input() percDrenado: number = 0;

  volumeInjetado: number;
  volumeDrenado: number ;
  
  ecDrenado: number ;
  ecInjetado: number ;
  phDrenado: number;
  phInjetado: number;

  
  constructor(private router: Router, private messageService: MessageService, private primengConfig: PrimeNGConfig, private formService: FormService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.RecuperarValoresTela();
  }


  RecuperarValoresTela() {
    let volumeInjetado = window.localStorage.getItem('volumeInjetado')
    if (volumeInjetado !== "" && volumeInjetado !== undefined && volumeInjetado !== null) {
      this.volumeInjetado = parseInt(volumeInjetado!);
    }

    let volumeDrenado = window.localStorage.getItem('volumeDrenado')
    if (volumeDrenado !== "" && volumeDrenado !== undefined && volumeInjetado !== null) {
      this.volumeDrenado = parseInt(volumeDrenado!);
    }

    let percDrenado = window.localStorage.getItem('percDrenado')
    if (percDrenado !== "" && percDrenado !== undefined && percDrenado !== null) {
      this.percDrenado = parseInt(percDrenado!);
    }
    let ecDrenado = window.localStorage.getItem('ecDrenado')
    if (ecDrenado !== "" && ecDrenado !== undefined && ecDrenado !== null) {
      this.ecDrenado = parseInt(ecDrenado!);
    }
    let ecInjetado = window.localStorage.getItem('ecInjetado')
    if (ecInjetado !== "" && ecInjetado !== undefined && ecInjetado !== null) {
      this.ecInjetado = parseInt(ecInjetado!);
    }
    let phDrenado = window.localStorage.getItem('phDrenado')
    if (phDrenado !== "" && phDrenado !== undefined && phDrenado !== null) {
      this.phDrenado = parseInt(phDrenado!);
    }
    let phInjetado = window.localStorage.getItem('phInjetado')
    if (phInjetado !== "" && phInjetado !== undefined && phInjetado !== null) {
      this.phInjetado = parseInt(phInjetado!);
    }
  }



  btnContinuar() {
    if (this.validarValoresTela(this.volumeInjetado, this.volumeDrenado, this.percDrenado, this.ecDrenado, this.ecInjetado, this.phDrenado, this.phInjetado)) {
     this.formService.saveForm();

     setTimeout(() => {
      this.verificarNotifica????o();
    }, 2000);

   
    }
  }
  btnVoltar() {
    this.validarValoresTela(this.volumeInjetado, this.volumeDrenado, this.percDrenado, this.ecDrenado, this.ecInjetado, this.phDrenado, this.phInjetado)
    this.router.navigate(['/formulario/pulso']);
  }


  verificarNotifica????o(){ 
    debugger; 
    if( localStorage.getItem('envio') === 'false'){
      this.messageService.add({severity:'error', summary: 'Erro', detail: 'Erro ao enviar o formul??rio!'});
    }
  }

  validarValoresTela(volumeInjetado: number, volumeDrenado: number, percDrenado: number,
    ecDrenado: number, ecInjetado: number, phDrenado: number, phInjetado: number) {
    let listaCamposErro: string[] = [];

    let erro = false;

    if (volumeInjetado === 0|| isNaN(volumeInjetado)|| volumeInjetado === undefined || volumeInjetado === null)
      listaCamposErro.push('Volume Injetado');
    else {
      this.set('volumeInjetado', volumeInjetado)
    }

    if (percDrenado === 0|| isNaN(percDrenado)|| percDrenado === undefined || percDrenado === null)
      listaCamposErro.push('Percentual Drenado');
    else {
      this.set('percDrenado', percDrenado)
    }

    if (volumeDrenado === 0|| isNaN(volumeDrenado)|| volumeDrenado === undefined || volumeDrenado === null)
      listaCamposErro.push('Volume Drenado');
    else {
      this.set('volumeDrenado', volumeDrenado)
    }

    if (ecDrenado === 0|| isNaN(ecDrenado)|| ecDrenado === undefined || ecDrenado === null)
      listaCamposErro.push('EC Drenado');
    else {
      this.set('ecDrenado', ecDrenado)
    }

    if (ecInjetado === 0|| isNaN(ecInjetado)|| ecInjetado === undefined || ecInjetado === null)
      listaCamposErro.push('EC Injetado');
    else {
      this.set('ecInjetado', ecInjetado)
    }

    if (phDrenado === 0|| isNaN(phDrenado)|| phDrenado === undefined || phDrenado === null)
      listaCamposErro.push('PH Drenado');
    else {
      this.set('phDrenado', phDrenado)
    }

    if (phInjetado === 0|| isNaN(phInjetado)|| phInjetado === undefined || phInjetado === null)
      listaCamposErro.push('PH Injetado');
    else {
      this.set('phInjetado', phInjetado)
    }

    if (listaCamposErro.length > 0) {
      erro = true;

      listaCamposErro.forEach(element => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Preencha o campo: ' + element + '!' })
      });
    }

    return !erro;
  }

  set(key: string, value: any) {
    window.localStorage.setItem(key, value);
  }

 

  onChangeCalculoVolDrenado(valor: number){    
this.volumeDrenado = valor;
    this.percDrenado = (this.volumeInjetado / this.volumeDrenado )
    if(isNaN(this.percDrenado))this.percDrenado = 0;    
  }

  onChangeCalculoVolInjetado(valor: number){   
this.volumeInjetado = valor;
    this.percDrenado = (this.volumeInjetado / this.volumeDrenado ) 
    if(isNaN(this.percDrenado))this.percDrenado = 0;
  }
}




