import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/Authentication/usuario';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { Table } from 'primeng/table'
import { PrimeNGConfig } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';
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
  displayEdit: boolean = false;
  constructor(private router: Router, private messageService: MessageService, private cadastroUsuario: CadastroUsuarioService, private primengConfig: PrimeNGConfig,private confirmationService: ConfirmationService) {
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
    let funcaoCache = window.localStorage.getItem('funcao');
    if(funcaoCache === null || funcaoCache === 'Usuario')
    {
      debugger;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Usuário sem permissão de acesso!' });
     
      this.router.navigate(['/inicio']);
 
     
    }
   
  }
  showDialog() {
    if (this.VerificarNivelUsuario('criação'))
      this.display = true;
  }
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
  onRowEditInit(usuario: Usuario) {   
     
      if (usuario.idUsuario != undefined)
      this.usuariosClone[usuario.idUsuario] = { ...usuario };  
  }

  onRowEditSave(usuario: Usuario) {

    if (usuario.nome != '') {
      delete this.usuariosClone[usuario.idUsuario!];

      if (this.usuarios !== undefined) {
        this.cadastroUsuario.EditarUsuario(usuario).subscribe(retorno => {

          if (retorno)
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário atualizado!' });
          else {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao atualziar o Usuário' });
          }

        }, err => {
          console.log("ocorreu um erro!", err);
        });




      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao atualziar o Usuário' });
      }
    }
  }

  onRowEditCancel(usuario: Usuario, index: number) {
    if (usuario.idUsuario != undefined)
      this.usuarios[index] = this.usuariosClone[usuario.idUsuario!];
    delete this.usuariosClone[usuario.idUsuario!];
  }
  onRowExclude(usuario: Usuario, index: number){   
      this.confirmationService.confirm({
          message: 'Tem certeza que deseja excluir este usuário? ',
          accept: () => {
            if (this.VerificarNivelUsuario('exclusão')) {
              this.cadastroUsuario.ExcluirUsuario(usuario).subscribe(retorno => {
        
                if (retorno){
                  debugger;
                  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário excluído!' });
                  this.usuarios = this.usuarios.filter(u=> u.idUsuario != usuario.idUsuario);}
                else {
                  this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir o usuário' });
                }
        
              }, err => {
                console.log("ocorreu um erro!", err);
              });
            }
          }
      });
    
  }
  

  applyFilterGlobal($event: any, stringVal: any) {

    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }


  criarUsuario(criacaoForm: NgForm) {
    debugger;
    if (this.VerificarNivelUsuario('criação')) {

      this.display = false;
      this.usuarioCriacao.email = criacaoForm.value.email;
      this.usuarioCriacao.usuario = criacaoForm.value.usuario;
      this.usuarioCriacao.funcao = criacaoForm.value.funcao;
      this.usuarioCriacao.nome = criacaoForm.value.nome;
      this.usuarioCriacao.ativo = criacaoForm.value.status;
      this.usuarioCriacao.senha = criacaoForm.value.senha;


      if (this.usuarioCriacao.nome != '' && this.usuarioCriacao.usuario !== '' && this.usuarioCriacao.senha !== '' && this.usuarioCriacao.ativo !== undefined) {

        this.cadastroUsuario.CriarUsuario(this.usuarioCriacao).subscribe(retorno => {

          if (retorno) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário criado!' });
            this.usuarios.push(this.usuarioCriacao);
            this.usuarioCriacao = {};

          }
          else {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao criar o Usuário' });
          }

        }, err => {
          console.log("ocorreu um erro!", err);
        });
      }
    }
  }

  VerificarNivelUsuario(mensagem: string) {
    
    let idUsuarioCache = window.localStorage.getItem('idUsuario');
    if (idUsuarioCache != null) {
      let usuarioVerificado = this.usuarios?.find(t => t.idUsuario == parseInt(idUsuarioCache!))

      if (usuarioVerificado !== null && usuarioVerificado?.funcao === 'Usuario') {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Usuário não possui permissão para ' + mensagem + ' !' });
        return false;
      }
      else if (usuarioVerificado !== null && (usuarioVerificado?.funcao === 'Desenvolvedor' || usuarioVerificado?.funcao === 'Adminsitrador')) {
        return true;
      }

    }
    return false;
  }

  VerificarUsuarioEditar(){
    let funcaoCache = window.localStorage.getItem('funcao');
    if(funcaoCache === null || funcaoCache === 'Usuario')
    {
      debugger;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Usuário sem permissão de acesso!' });
     
     
     this.displayEdit = false;
     
    }
    this.displayEdit = true;
  }
}

