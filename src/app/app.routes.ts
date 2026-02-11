import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DirectivaComponent } from './directivas/directiva.component';
import { FormComponent } from './clientes/form.component';
import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  // Login sin header/footer
  { path: 'login', component: LoginComponent },

  // Rutas protegidas con LayoutComponent (header/footer)
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/clientes', pathMatch: 'full' },
      { path: 'clientes', component: ClientesComponent },
      { path: 'directivas', component: DirectivaComponent },
      { path: 'cliente/form', component: FormComponent },
      { path: 'cliente/form/:id', component: FormComponent }
    ]
  },

  // Ruta comodín
  { path: '**', redirectTo: 'login' }
];
