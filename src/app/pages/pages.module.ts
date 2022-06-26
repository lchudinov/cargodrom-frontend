import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './components/header/header.component';
import { RequestComponent } from './components/request/request.component';
import { OrderComponent } from './components/order/order.component';
import { BitComponent } from './components/bit/bit.component';
import { TariffComponent } from './components/tariff/tariff.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { ReportComponent } from './components/report/report.component';
import { ClientComponent } from './components/client/client.component';
import { GuideComponent } from './components/guide/guide.component';
import { CurrencyComponent } from './components/currency/currency.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    HeaderComponent,
    RequestComponent,
    OrderComponent,
    BitComponent,
    TariffComponent,
    SupplierComponent,
    ReportComponent,
    ClientComponent,
    GuideComponent,
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
