//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

//Components
import { FormStepsComponent } from './Formulario/form-steps/form-steps.component';
import { TabMenuComponent } from './Formulario/tab-menu/tab-menu.component';
import { FormClimaComponent } from './Formulario/form-clima/form-clima.component';
import { InicioComponent } from './Home/inicio/inicio.component';
import { FormEstufaComponent } from './Formulario/form-estufa/form-estufa.component';
import { FormPulsoComponent } from './Formulario/form-pulso/form-pulso.component';
import { FormVolumeComponent } from './Formulario/form-volume/form-volume.component';
import { LoginComponent } from './Login/login.component';
import { AuthenticationComponent } from './Authentication/authentication.component';
import { LoginService } from './Login/login.service';

//PrimeNg
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import {TabMenuModule} from 'primeng/tabmenu';
import {ImageModule} from 'primeng/image';
import {ChipsModule} from 'primeng/chips';
import { PasswordModule } from "primeng/password";
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import {RippleModule} from 'primeng/ripple';
import { AuthGuard } from './Authentication/auth.guard';





@NgModule({
  declarations: [
    AppComponent,    
    FormStepsComponent,
    TabMenuComponent,    
    FormClimaComponent,
    InicioComponent,
    FormEstufaComponent,
    FormPulsoComponent,
    FormVolumeComponent,
    LoginComponent,
    AuthenticationComponent    
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CalendarModule,FormsModule,CheckboxModule,InputNumberModule,StepsModule,ToastModule,
    MessagesModule,MessageModule,CardModule,TabMenuModule,ImageModule,ChipsModule,PasswordModule,InputTextModule,
    TooltipModule,RippleModule
    
  ],  
  bootstrap: [AppComponent],
  providers: [HttpClientModule,LoginService,AuthGuard]
})
export class AppModule { }
