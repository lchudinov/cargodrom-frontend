import { AuthGuard } from './auth/auth.guard';
import { LogoutComponent } from './auth/components/logout/logout.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import {CheckCodeComponent} from "./auth/components/check-code/check-code.component";

const config: ExtraOptions = {
  useHash: true,
};

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent, },
  { path: 'logout', component: LogoutComponent, },
  { path: 'register', component: RegisterComponent, },
  { path: 'check-code', component: CheckCodeComponent, },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
