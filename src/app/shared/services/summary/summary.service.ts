import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { map } from 'rxjs/operators';
import { Summary } from 'src/app/shared/models/summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  url = '/api/summary'
  constructor(private  http : HttpClient , private userService : UserService) { }

  getSummary(){
   
    return this.http.get(this.url)
    .pipe(map(result=>{
      return <Summary>result
    }))
  }
}
