import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authentication/auth.guard';
import { AuthenticationComponent } from './Authentication/authentication.component';
import { FormClimaComponent } from './Formulario/form-clima/form-clima.component';
import { FormEstufaComponent } from './Formulario/form-estufa/form-estufa.component';
import { FormPulsoComponent } from './Formulario/form-pulso/form-pulso.component';
import { FormStepsComponent } from './Formulario/form-steps/form-steps.component';
import { FormVolumeComponent } from './Formulario/form-volume/form-volume.component';
import { InicioComponent } from './Home/inicio/inicio.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [

  {
    path: 'formulario',
    component: FormStepsComponent,
    children: [
      {
        path: 'clima',
        component: FormClimaComponent
      },
      {
        path: 'volume',
        component: FormVolumeComponent
      }

      ,
      {
        path: 'estufa',
        component: FormEstufaComponent
      }
      ,
      {
        path: 'pulso',
        component: FormPulsoComponent
      }
    ]
  },  
  {
    path: 'inicio',
    component: InicioComponent
  },  
  {
    path: '',
    component: LoginComponent
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
