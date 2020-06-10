import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-dashboard-card',
  templateUrl: './admin-dashboard-card.component.html',
  styleUrls: ['./admin-dashboard-card.component.css']
})
export class AdminDashboardCardComponent implements OnInit {

  @Input('value')
  value : number 
  
  @Input('color')
  color : string 
  constructor() { }

  ngOnInit(): void {
  }

}
