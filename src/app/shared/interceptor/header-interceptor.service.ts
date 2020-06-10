import { Injectable, NgZone } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/shared/services/user/user.service';
import { map, catchError, finalize } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ProgressService } from 'src/app/shared/services/progress/progress.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor{

 
  constructor(private userService : UserService , 
    private message : NotificationService , 
    private loader : ProgressService, 
    private router : Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    this.loader.show()
   
    // adding header
    let header = req.headers.set('authorization' ,
     this.userService.getToken())
    let r = req.clone({
      headers : header
    })

    // handle
    return next.handle(r).pipe(
      map(result=>{
        console.log(result);
        return result;
      }), 
      catchError(
        (err : HttpErrorResponse)=>{
            this.showProperMessage(err)
          return throwError(err)
        }
      )
      , 
      finalize(()=>{
        this.loader.hide()
      })
    )
  }


  showProperMessage(err : HttpErrorResponse){
    console.log(this.router.url);
    console.log(err)
    
    if(err.url.includes('is-admin')){
      return 
    }
    
    
    if(this.router.url.includes('login') && err.status != 401 ){
      this.message.show('Invalid Email Or Password !!')
      return 
    }

    if(err.status == 401){
      this.message.show('Session Expired.. Please Login Again !!')
      this.userService.logout()
      this.router.navigate(['login'] , {
        queryParams : {
          'returnUrl' : this.router.url
        }
      })
      return 
    }
   
  }


}
