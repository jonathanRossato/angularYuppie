import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Página Inicial', icon: 'pi pi-fw pi-home',routerLink: ["/inicio"]},
          {label: 'Formulário', icon: 'pi pi-fw pi-book',routerLink: ["/formulario/estufa"]},
          {label: 'Editor de Usuários', icon: 'pi pi-user-edit',routerLink: ["/cadastroUsuario"]},
         
      ];
  }
}
