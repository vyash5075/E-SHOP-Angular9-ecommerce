import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/shared/services/summary/summary.service';
import { Summary } from 'src/app/shared/models/summary';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  summary: Summary;
  users30: number
  orders30: number
  sales30: number
  totalProducts: number
  usersTotal: number
  ordersTotal: number

  colors = {
    a : '#EA7773', 
    b : '#1BCA9B', 
    c:  "#1287A5"
  }


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private summaryService : SummaryService) { }

//   #EA7773
// #487EB0
// #1287A5

  ngOnInit(): void {
    this.getSummary()
  }

  initChart(){
    this.barChartData = []
    this.barChartLabels = []
    let productSummary =  this.summary.result.last30DaysSummary.productWise30DaysSummary
    let sales : number[] = [];
    let quantities : number[] = [];
    productSummary.forEach(element=>{
      let name = element.product.name;
      if(name.length > 15){
          name = name.substr(0 , 15);
      }
        this.barChartLabels.push(name)
        quantities.push(element.quantity)
        sales.push(element.totalSale)
    })

    this.barChartData = [
      {label : 'Sales' , data : sales } , 
      {label : 'Quantity' , data : quantities}
    ]
  }

  getSummary(){
    this.summaryService.getSummary()
    .subscribe({
      next : summary=>{
        console.log(summary);
        
        this.summary = summary;

        this.orders30 = summary.result.last30DaysSummary.orders
        this.users30 = summary.result.last30DaysSummary.userRegistered
        this.sales30 = summary.result.last30DaysSummary.sale
        this.ordersTotal = summary.result.overAll.orders
        this.usersTotal= summary.result.overAll.users
        this.totalProducts = summary.result.overAll.products

        this.initChart()
      }
    })
    
  }

  changeChart(chartType:ChartType){
    this.barChartType = chartType
  }

}
