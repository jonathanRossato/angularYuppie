import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Formulario/form/form.component';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormStepsComponent } from './Formulario/form-steps/form-steps.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';

import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { TabMenuComponent } from './Formulario/tab-menu/tab-menu.component';

import {TabMenuModule} from 'primeng/tabmenu';
import { AvatarMenuComponent } from './Formulario/avatar-menu/avatar-menu.component';



// avatar
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { FormClimaComponent } from './Formulario/form-clima/form-clima.component';
import { InicioComponent } from './Home/inicio/inicio.component';



//image
import {ImageModule} from 'primeng/image';

import {ChipsModule} from 'primeng/chips';
import { FormEstufaComponent } from './Formulario/form-estufa/form-estufa.component';
import { FormPulsoComponent } from './Formulario/form-pulso/form-pulso.component';
import { FormVolumeComponent } from './Formulario/form-volume/form-volume.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormStepsComponent,
    TabMenuComponent,
    AvatarMenuComponent,
    FormClimaComponent,
    InicioComponent,
    FormEstufaComponent,
    FormPulsoComponent,
    FormVolumeComponent    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CalendarModule,FormsModule,CheckboxModule,InputNumberModule,StepsModule,ToastModule,MessagesModule,MessageModule,CardModule,TabMenuModule,AvatarModule,AvatarGroupModule,
    ImageModule,ChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
