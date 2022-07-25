import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css'],
  providers:[ConfirmationService]
})
export class TabMenuComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService,private router: Router) { }
  Sair() {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja Sair? ',
        accept: () => {
          window.localStorage.clear();
          this.router.navigate(['/login']);

        }
    });
}
  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Página Inicial', icon: 'pi pi-fw pi-home',routerLink: ["/inicio"]},
          {label: 'Formulário', icon: 'pi pi-fw pi-book',routerLink: ["/formulario/estufa"]},
          {label: 'Editor de Usuários', icon: 'pi pi-user-edit',routerLink: ["/cadastroUsuario"]},
          {label: 'Sair', icon: 'pi pi-sign-out',style:'', command: (event) => {
            this.Sair();
          }},
         
      ];
  }


 
}
