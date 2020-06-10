import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminCustomersComponent } from './components/admin/admin-customers/admin-customers.component';
import { AdminDashboardCardComponent } from './components/admin/admin-dashboard-card/admin-dashboard-card.component';
import { AdminNewProductComponent } from './components/admin/admin-new-product/admin-new-product.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from '../core/components/footer/footer.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    AdminNewProductComponent,
    AdminCustomersComponent,
    AdminDashboardCardComponent,
    
  ],
  imports: [
    SharedModule,
    ChartsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
