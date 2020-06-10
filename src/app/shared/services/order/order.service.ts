import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderUrl = '/api/orders'
  
  constructor(private http : HttpClient , private userService : UserService ) { }

  placeOrder(orderInfo : OrderInfo){
   
    return this.http.post(this.orderUrl , orderInfo  )
  }
  changeStatus(data : {status : string} , orderId : string){
   
    return this.http.patch(this.orderUrl+'/'+orderId , data  )
  }
  
  getUserOrders(all ?: boolean ){
    let url = this.orderUrl;
    if(all){
      url = url + '?all=true'
    }
   
    return this.http.get(url).pipe(
      map((result : {count : number , orders : Order[]})=>{
        return result.orders
      }
      )
    )
  }

  getAdminOrders(){
    return this.getUserOrders(true)
  }
}

export interface OrderInfo {
  firstName: string;
  lastName: string;
  address: string;
  products: ProductInfo[];
}

export interface ProductInfo {
  productId: string;
  quantity: number;
  price: number;
}
