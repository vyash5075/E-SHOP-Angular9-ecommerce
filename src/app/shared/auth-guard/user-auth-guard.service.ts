import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate{

  constructor(private userService : UserService , private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot) {
    
      let flag = false
      console.log('User Auth Gaurd');
      
      if(this.userService.isLoggedIn()){
        flag = true
      }else{
        let currenturl = state.url
        this.router.navigate(['login'] , {
          queryParams : {
            returnUrl : currenturl
          }
        })
      }


    return flag;
  }
}
