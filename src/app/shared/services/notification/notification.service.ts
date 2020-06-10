import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackbar : MatSnackBar) { }

  show(message){
    this.snackbar.open(message , ' ' ,  {
      horizontalPosition : "right" , 
      verticalPosition : "bottom" , 
      duration : 4000
    })
  }
}
