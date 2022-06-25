import { RequestComponent } from './components/request/request.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { BitComponent } from './components/bit/bit.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'request',
        component: RequestComponent,
        pathMatch: 'full',
      },
      {
        path: 'bit',
        component: BitComponent,
        pathMatch: 'full',
      },
      {
        path: 'order',
        component: OrderComponent,
        pathMatch: 'full',
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
