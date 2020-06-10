import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numberOfItems : number = 0 ;
  isLoggedIn = false;
  isAdminUrl = false;
  isAdmin$
  constructor(private cartService : CartService ,
    private router : Router, 
    private userService : UserService) { 


        router.events.subscribe({
          next : (event)=>{
            console.log(event);
            
            if(event instanceof NavigationStart)
            {
              let url = (<NavigationStart>event).url
                this.isAdminUrl = url.includes('/admin')
            }
          }
        })
    }

  ngOnInit(): void {


    this.cartService.cartObservable.subscribe({
      next : (cart)=>{
        console.log(cart);
        this.numberOfItems = Object.keys(cart).length
        
      }
    })


    

    this.userService.loginObservable.subscribe(
      {
        next : ()=>{

          let token = this.userService.getToken();
          if(token!= ''){
            this.cheakAdmin()
            this.isLoggedIn = true;
          }else{
            this.isLoggedIn = false;
          }
          console.log(this.isLoggedIn);
          
        }
      }
    )
  }

  cheakAdmin(){
    // cheak user is admin or not 
    this.isAdmin$ = this.userService.isAdmin()

  }


  logout(){
    // alert('')
    this.userService.logout()
    this.router.navigate(['login'])
  }
}
