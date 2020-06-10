import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  modelRef: BsModalRef
  selectedOrder : Order 

  orders$ : Observable<Order[]>;
  constructor(private orderService : OrderService , private modalService : BsModalService) { }

  ngOnInit(): void {
    this.collectOrders()
  }

  collectOrders(){
    this.orders$ = this.orderService.getAdminOrders()
  }

  changeStatus(status : string , order :Order){
    this.orderService.changeStatus({status : status} , order._id)
    .subscribe({
      next : result=>{
        console.log(result);
        order.status = status
        
      }
    })
  }

  showDetails( order :Order , table){
    this.selectedOrder = order
    this.modelRef = this.modalService.show(table , {class : 'modal-lg'})
  }

  close(){
    this.modelRef.hide()
  }

}
