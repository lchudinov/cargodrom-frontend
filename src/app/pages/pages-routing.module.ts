import { SupplierComponent } from './components/supplier/supplier.component';
import { RequestComponent } from './components/request/request.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { BitComponent } from './components/bit/bit.component';
import { TariffComponent } from './components/tariff/tariff.component';
import { ReportComponent } from './components/report/report.component';
import { ClientComponent } from './components/client/client.component';
import { GuideComponent } from './components/guide/guide.component';


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
      },
      {
        path: 'tariff',
        component: TariffComponent,
        pathMatch: 'full',
      },
      {
        path: 'supplier',
        component: SupplierComponent,
        pathMatch: 'full',
      },
      {
        path: 'report',
        component: ReportComponent,
        pathMatch: 'full',
      },
      {
        path: 'client',
        component: ClientComponent,
        pathMatch: 'full',
      },
      {
        path: 'guide',
        component: GuideComponent,
        pathMatch: 'full',
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
