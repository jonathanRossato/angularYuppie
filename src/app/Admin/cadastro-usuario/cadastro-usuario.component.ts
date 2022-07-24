import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/Authentication/usuario';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { Table } from 'primeng/table'
import { PrimeNGConfig } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
  providers: [MessageService, CadastroUsuarioService],
  styles: [`
      :host ::ng-deep .p-cell-editing {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
      }
  `]
})

export class CadastroUsuarioComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  usuarios: Array<Usuario> = new Array<Usuario>();
  usuariosClone: { [s: number]: Usuario; } = {};
  statusValores: SelectItem[];
  funcaoValores: SelectItem[];
  display: boolean = false;
  usuarioCriacao: Usuario;

  constructor(private router: Router,private messageService: MessageService, private cadastroUsuario: CadastroUsuarioService, private primengConfig: PrimeNGConfig) {
    this.statusValores = [
      {
        label: 'Ativo',
        value: true
      },
      {
        label: 'Desativado',
        value: false
      }
    ];

    this.funcaoValores = [
      {
        label: 'Administrador',
        value: 'Administrador'
      },
      {
        label: 'Desenvolvedor',
        value: 'Desenvolvedor'
      }
      ,
      {
        label: 'Usuário',
        value: 'Usuario'
      }
    ];

   
  }



  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.BuscarListaUsuarios();
    this.usuarioCriacao = {};
  }
  showDialog() {
    this.display = true;
  }
  BuscarListaUsuarios() {

    if (this.usuarios !== undefined) {
      this.cadastroUsuario.ListarUsuarios().subscribe(users => {
        this.usuarios = users;


        debugger;
        return users;
      }, err => {
        console.log("ocorreu um erro!", err);
      });

    }
  };
  onRowEditInit(usuario: Usuario) {
    if (usuario.idUsuario != undefined)
      this.usuariosClone[usuario.idUsuario] = { ...usuario };
  }

  onRowEditSave(usuario: Usuario) {
    debugger;
    if (usuario.nome != '') {
      delete this.usuariosClone[usuario.idUsuario!];

      if (this.usuarios !== undefined) {
        this.cadastroUsuario.EditarUsuario(usuario).subscribe(retorno => {

          if (retorno)
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário atualizado!' });
          else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao atualziar o Usuário' });
          }

        }, err => {
          console.log("ocorreu um erro!", err);
        });




      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao atualziar o Usuário' });
      }
    }
  }

  onRowEditCancel(usuario: Usuario, index: number) {
    if (usuario.idUsuario != undefined)
      this.usuarios[index] = this.usuariosClone[usuario.idUsuario!];
    delete this.usuariosClone[usuario.idUsuario!];
  }

  applyFilterGlobal($event: any, stringVal: any) {

    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }


  criarUsuario(criacaoForm: NgForm) {
    debugger;
    this.display = false;
    this.usuarioCriacao.email = criacaoForm.value.email;
    this.usuarioCriacao.usuario = criacaoForm.value.usuario;
    this.usuarioCriacao.funcao = criacaoForm.value.funcao;
    this.usuarioCriacao.nome = criacaoForm.value.nome;
    this.usuarioCriacao.ativo = criacaoForm.value.status;
    this.usuarioCriacao.senha = criacaoForm.value.senha;
    debugger;

    if (this.usuarioCriacao.nome != '' && this.usuarioCriacao.usuario !== '' && this.usuarioCriacao.senha !== '' && this.usuarioCriacao.ativo !== undefined) {

      this.cadastroUsuario.CriarUsuario(this.usuarioCriacao).subscribe(retorno => {

        if (retorno){
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário criado!' });
          this.usuarios.push(this.usuarioCriacao);
          this.usuarioCriacao = {};
          
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao criar o Usuário' });
        }

      }, err => {
        console.log("ocorreu um erro!", err);
      });    }
  }
}
export interface status {
  nome?: string;
  valor?: boolean;
}

