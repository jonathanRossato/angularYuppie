import { Component,OnInit,ViewEncapsulation,NgModule } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  
    providers: [MessageService],
       styleUrls: ['./form-steps.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FormStepsComponent { 
    items!: MenuItem[];
    
    
    activeIndex: number = 1;
    


    constructor(public messageService: MessageService) { }

 

    ngOnInit() {
        this.items = [{
                label: 'Estufa',
                routerLink: 'estufa'
            },
            {
                label: 'Clima'    ,
                routerLink: 'clima'           
            },
            { label: 'Pulso'    ,
              routerLink: 'pulso'              
            },
            {
                label: 'Volume' ,
                routerLink: 'volume'         
            }
        ];
    } 

}
