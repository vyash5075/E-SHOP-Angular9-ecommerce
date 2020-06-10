import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminNewProductComponent } from './components/admin/admin-new-product/admin-new-product.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminCustomersComponent } from './components/admin/admin-customers/admin-customers.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { UserAuthGuardService } from '../shared/auth-guard/user-auth-guard.service';
import { AdminAuthGuardService } from '../shared/auth-guard/admin-auth-guard.service';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [UserAuthGuardService, AdminAuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'orders',
        component: AdminOrdersComponent
      },
      {
        path: 'products',
        component: AdminProductsComponent
      },
      {
        path: 'new-product',
        component: AdminNewProductComponent
      },
      {
        path: 'customers',
        component: AdminCustomersComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
