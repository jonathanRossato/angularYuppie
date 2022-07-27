import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormService } from '../form.service';
import { Formulario } from '../formulario';
import { Table } from 'primeng/table'
import { saveAs } from 'file-saver';
import { PrimeNGConfig } from 'primeng/api';
import { CadastroUsuarioService, Usuario } from 'src/app/Admin/cadastro-usuario/cadastro-usuario.service';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
  providers: [FormService, CadastroUsuarioService]
})
export class RelatorioComponent implements OnInit {

  constructor(private config: PrimeNGConfig, private formService: FormService, private cadastroUsuario: CadastroUsuarioService) { }
  @ViewChild('dt1') dt: Table | undefined;
  formularios: Array<Formulario> = new Array<Formulario>();
  usuarios: Array<Usuario> = new Array<Usuario>();
  cols: any[];
  display: boolean = false;
  exportColumns: any[];

  usuarioNome?: string;
  ngOnInit(): void {
    this.BuscarListaUsuarios();
    this.BuscarListaFormularios();

    this.config.setTranslation({

      matchAll: 'Todos',
      matchAny: 'Algum',
      startsWith: 'Inicia com',
      contains: 'Contém',
      notContains: 'Não contém',
      equals: 'Igual',
      endsWith: 'Termina com',
      notEquals: 'Não igual',
      addRule: 'Adicionar Regra',
      clear: 'Limpar',
      apply: 'Aplicar'

    });


    this.cols = [
      { field: "idUsuario", header: "idUsuario" },
      { field: "idFormulario", header: "idFormulario" },
      { field: "climas", header: "climas" },
      { field: "estufas", header: "estufas" },
      { field: "temperatura", header: "temperatura" },
      { field: "umidade", header: "umidade" },
      { field: "qtdPulsos", header: "qtdPulsos" },
      { field: "tempoPulso", header: "tempoPulso" },
      { field: "volInjetado", header: "volInjetado" },
      { field: "volDrenado", header: "volDrenado" },
      { field: "ecInjetado", header: "ecInjetado" },
      { field: "ecDrenado", header: "ecDrenado" },
      { field: "phInjetado", header: "phInjetado" },
      { field: "phDrenado", header: "phDrenado" },
      { field: "percDrenado", header: "percDrenado" },
      { field: "dataHora", header: "dataHora" }
    ];


    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field
    }));
  }


  BuscarListaFormularios() {
    this.formService.BuscaFormularios().subscribe(forms => {
      // forms.forEach((name, index) => forms[index].nomeUsuario = this.usuarios.find(u => u.idUsuario == forms[index].idUsuario)?.nome);
     

  
      this.formularios = forms;
      return forms;
    }, err => {
      console.log("ocorreu um erro!", err);
    });
  };

  BuscarListaUsuarios() {

    if (this.usuarios !== undefined) {
      this.cadastroUsuario.ListarUsuarios().subscribe(users => {
        this.usuarios = users;
        return users;
      }, err => {
        console.log("ocorreu um erro!", err);
      });

    }
  };
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  mostrarNome() {

    let teste = '';
    this.usuarioNome = this.usuarios.find(u => u.idUsuario == parseInt(teste))?.nome;
    this.display = true;
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.formularios);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "formularios");
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    saveAs.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }


  converterDataHora(data:Date){
    return data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
  }
}


