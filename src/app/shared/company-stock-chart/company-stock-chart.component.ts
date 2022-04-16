import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts'
declare var require: any;
require('highcharts/themes/dark-unica')(Highcharts);





@Component({
  selector: 'app-company-stock-chart',
  templateUrl: './company-stock-chart.component.html',
  styleUrls: ['./company-stock-chart.component.scss']
})
export class CompanyStockChartComponent implements OnInit {

  constructor() { }
  @Input() date_keys:string[]=[]
  @Input() closed_data:number[]=[]
  @Input() high_data:number[]=[]
  @Input() low_data:number[]=[]
  @Input() open_data:number[]=[]
  Highcharts=Highcharts;
  updateFlag=false;
  chartConstructor = "chart";
  chartOptions={}
  chartCallback: any;
 
  ngOnInit(): void {
    this.chartOptions={
      chart: {
        type: 'line'
    },
    panning: {
      enabled: true,
      type: 'xy'
  },
  panKey: 'alt',
  zoomType: 'xy',
    title: {
        text: 'Market Trend'
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
  },
  navigator: {
    xAxis: {
      categories: this.date_keys,
      crosshair: true
  },
    
    enabled: true      
},
    xAxis: {
        categories: this.date_keys,
        crosshair: true
    },
    
    
    yAxis: {
        min: 0,
        title: {
            text: 'US dollars'
        }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
    plotOptions: {
        series: {
          dataLabels: {
              enabled: true
          }
      }
    },
    series: [{
      type: 'line',
      name: 'Closed Trend',
      data: this.closed_data,
      color:'#e91e63'
      
  },
{
  type: 'line',
      name: 'Open Trend',
      data: this.open_data,
      color:'#00B2EE'
},
{
  type: 'line',
      name: 'High Trend',
      data: this.high_data,
      color:'#00FF00'
},
{
  type: 'line',
      name: 'Low Trend',
      data: this.low_data,
      color:'#FF0000'
}
]
    }

    
  }

  // ngOnChanges(changes: SimpleChanges): void {

  //   this.updateChart(this.date_keys,this.closed_data);
    
  // }

//   updateChart(value1: string[],value2:number[]){
//     // const self = this,chart = this.chart;
//     this.chartOptions.series=[
//       {
//         type: 'line',
//         name: 'Open Defects',
//         data: value2,
//         color:'#FF0000'
        
//     }, 
//     ]
//     this.chartOptions.xAxis.categories=value1;
//     this.chartOptions.navigator.xAxis.categories=value1;

    
//     this.updateFlag = true;

//   }
// }
}

