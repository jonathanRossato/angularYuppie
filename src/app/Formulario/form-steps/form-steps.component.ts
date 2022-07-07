import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Formulario } from '../formulario';

import { FormService } from '../form.service';
// import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'app-form-steps',
    templateUrl: './form-steps.component.html',

    providers: [MessageService, FormService],
    styleUrls: ['./form-steps.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FormStepsComponent {
    items!: MenuItem[];
    value: number = 0;
    activeIndex: number = 1;

   



    constructor(public messageService: MessageService, public formService: FormService) {
       
     
    }



    ngOnInit() {


        // console.log(this.formulario)

        this.items = [{
            label: 'Estufa',
            routerLink: 'estufa'
        },
        {
            label: 'Clima',
            routerLink: 'clima'
        },
        {
            label: 'Pulso',
            routerLink: 'pulso'
        },
        {
            label: 'Volume',
            routerLink: 'volume'
        }
        ];
    }



}
