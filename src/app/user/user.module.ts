import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { StoreComponent } from './components/store/store.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StoreComponent,
    FilterComponent,
    ProductCardComponent,
    UserOrdersComponent,
    CartComponent,
    ProductQuantityComponent,
  ],
  imports: [
    
    SharedModule,
    UserRoutingModule
  ],
  exports:[
    FilterComponent,
    StoreComponent
  ]
})
export class UserModule { }
