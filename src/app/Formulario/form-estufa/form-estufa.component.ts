import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-estufa',
  templateUrl: './form-estufa.component.html',
  styleUrls: ['./form-estufa.component.css'],

  providers: [MessageService, FormService],

})
export class FormEstufaComponent implements OnInit {


  public valoresSelecionadosEstufa: string[] = [];
  public dataHora: Date = new Date();




  @Output() respostaFamilia = new EventEmitter();


  constructor(private router: Router, private messageService: MessageService, private primengConfig: PrimeNGConfig, public formService: FormService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.RecuperarValoresTela();
  }
  RecuperarValoresTela() {
    let estufasTela = window.localStorage.getItem('estufas')
    if (estufasTela !== "" && estufasTela !== undefined && estufasTela != null) {
      this.valoresSelecionadosEstufa.push(...estufasTela!.split(','))
    }


    let dataH = window.localStorage.getItem('dataHora')
    if (dataH !== "" && dataH !== undefined) {
      this.dataHora = new Date(dataH!);
    }
  }

  btnContinuar() {
    if (this.validarValoresTela(this.valoresSelecionadosEstufa, this.dataHora)) {

      this.set('estufas', this.valoresSelecionadosEstufa)
      this.set('dataHora', this.dataHora)
      this.router.navigate(['/formulario/clima']);
    }
  }



  validarValoresTela(estufas: string[], dataHora: Date) {
    if (estufas.length > 0)
      return true;
    else {
      this.mostarErro();
      console.log('error');
      return false;
    }

  }

  mostarErro() {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Preencha o campo: Estufas!' });
  }

  //TODO: verificar como fazer o snapshot dos valoers ja preenchidos
  validarValoresAnteriores(valor: string) {
    if (this.valoresSelecionadosEstufa.some(x => x === valor)) {
      // this.formService.getFormularioPreenchido = this.personalInformation;
      return true
    }


    return false
  }

  set(key: string, value: any) {
    window.localStorage.setItem(key, value);
  }
}
