import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private _loaderObservable : BehaviorSubject<boolean>  = new BehaviorSubject(false); 
  constructor() { }
  
  public get loaderObservable() {
    return this._loaderObservable
  }

  hide(){
    this._loaderObservable.next(false)  
  }

  show(){
    this._loaderObservable.next(true)  
  }


  

}
