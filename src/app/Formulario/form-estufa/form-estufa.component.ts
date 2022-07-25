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
  public dataHora: Date = new Date(Date.now());
  



  @Output() respostaFamilia = new EventEmitter();


  constructor(private config: PrimeNGConfig,private router: Router, private messageService: MessageService, private primengConfig: PrimeNGConfig, public formService: FormService) { }

  ngOnInit(): void {
    this.config.setTranslation({
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar'
  });


    this.primengConfig.ripple = true;
    this.RecuperarValoresTela();
  }
  RecuperarValoresTela() {
    let estufasTela = window.localStorage.getItem('estufas')
    if (estufasTela !== "" && estufasTela !== undefined && estufasTela != null) {
      this.valoresSelecionadosEstufa.push(...estufasTela!.split(','))
    }


    let dataH = window.localStorage.getItem('dataHora')
    if (dataH !== "" && dataH !== undefined && dataH != null) {
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
