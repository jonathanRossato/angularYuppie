import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { FormService } from '../form.service';
@Component({
  selector: 'app-form-volume',
  templateUrl: './form-volume.component.html',
  styleUrls: ['./form-volume.component.css'],
  providers: [MessageService,FormService]
})
export class FormVolumeComponent implements OnInit {


  volumeInjetado: number = 0;
  volumeDrenado: number = 0;
  percDrenado: number = 0;
  ecDrenado: number = 0;
  ecInjetado: number = 0;
  phDrenado: number = 0;
  phInjetado: number = 0;


  constructor(private router: Router, private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  btnContinuar() {
    if (this.validarValoresTela(this.volumeInjetado, this.volumeDrenado, this.percDrenado, this.ecDrenado, this.ecInjetado, this.phDrenado, this.phInjetado)) {
      this.router.navigate(['/inicio']);
    }
  }

  validarValoresTela(volumeInjetado: number, volumeDrenado: number, percDrenado: number,
    ecDrenado: number, ecInjetado: number, phDrenado: number, phInjetado: number) {
    let listaCamposErro: string[] = [];

    let erro = false;


    if (volumeInjetado === 0)
      listaCamposErro.push('Volume Injetado');

    if (percDrenado === 0)
      listaCamposErro.push('Percentual Drenado');

    if (volumeDrenado === 0)
      listaCamposErro.push('Volume Drenado');

    if (ecDrenado === 0)
      listaCamposErro.push('EC Drenado');

    if (ecInjetado === 0)
      listaCamposErro.push('EC Injetado');

    if (phDrenado === 0)
      listaCamposErro.push('PH Drenado');

    if (phInjetado === 0)
      listaCamposErro.push('PH Injetado');


    if (listaCamposErro.length > 0) {
      erro = true;

      listaCamposErro.forEach(element => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Preencha o campo: ' + element + '!' })});      
    }

    return !erro;
  }
}




