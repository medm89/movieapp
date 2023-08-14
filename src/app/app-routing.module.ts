import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
 { path: 'login', 
  component: LoginComponent,
 },
 { path: 'registro', 
  component: RegisterComponent,
 },
 {
  path: 'pages',
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
},
 { path: '**', 
  component: RegisterComponent,
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
