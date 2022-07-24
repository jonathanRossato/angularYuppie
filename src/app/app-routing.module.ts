import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './Admin/cadastro-usuario/cadastro-usuario.component';
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
    path: '',
    component: LoginComponent    
  },
  {
    path: 'login',
    component: LoginComponent    
  },  {
    path: 'cadastroUsuario',
    canActivate: [AuthGuard],
    component: CadastroUsuarioComponent
  },
  {
    path: 'inicio',
    canActivate: [AuthGuard],
    component: InicioComponent
  },
  {
    path: 'formulario',
    canActivate: [AuthGuard],
    component: FormStepsComponent,
    children: [
      {
        path: 'clima',
        canActivate: [AuthGuard],
        component: FormClimaComponent
      },
      {
        path: 'volume',
        canActivate: [AuthGuard],
        component: FormVolumeComponent
      }
      ,
      {
        path: 'estufa',
        canActivate: [AuthGuard],
        component: FormEstufaComponent
      }
      ,
      {
        path: 'pulso',
        canActivate: [AuthGuard],
        component: FormPulsoComponent
      }
    ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
