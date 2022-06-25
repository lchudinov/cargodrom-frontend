import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './components/header/header.component';
import { RequestComponent } from './components/request/request.component';
import { OrderComponent } from './components/order/order.component';
import { BitComponent } from './components/bit/bit.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    HeaderComponent,
    RequestComponent,
    OrderComponent,
    BitComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
