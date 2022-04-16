import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute,private service:BackendService,private snackbar:MatSnackBar) { }
  symbol:string=''
  company_detail:any;
  stock_data:any;
  isloading:boolean=false;
  date_keys:string[]=[]
  closed_data:number[]=[]
  open_data:number[]=[]
  high_data:number[]=[]
  low_data:number[]=[]
  errormessage:string=''
  ngOnInit(): void {
    this.isloading=true;
    try{
    this.symbol=this.actRoute.snapshot.params['symbol'];
    this.service.get_specific_company_details(this.symbol).subscribe(
      (result:any)=>{
        try{
        this.company_detail=result
        this.service.get_specific_company_chart(this.symbol).subscribe(
          (stock:any)=>{
            this.stock_data=stock['Time Series (Daily)']
            this.isloading=false
            let data_map:any=Object.values(this.stock_data)
            for(var i=0;i<20;i++)
            {
              this.closed_data.push(+data_map[i]["4. close"])
              this.open_data.push(+data_map[i]["1. open"])
              this.high_data.push(+data_map[i]["2. high"])
              this.low_data.push(+data_map[i]["3. low"])

            }
            this.closed_data=this.closed_data.reverse();
            this.open_data=this.open_data.reverse();
            this.high_data=this.high_data.reverse();
            this.low_data=this.low_data.reverse();
            this.date_keys=Object.keys(this.stock_data).reverse();
            this.date_keys=this.date_keys.slice(this.date_keys.length-20,this.date_keys.length) 
          }
        )
      }catch(error)
      {
        this.snackbar.open("Something went wrong" + result.Information)._dismissAfter(5000);
      }
    }
      // ,(error: Response) =>{
      //   this.errormessage="An unexpected error occured while connecting to ALVPHA VANTAGE API ! Please try after some time.";
      //   this.snackbar.open(this.errormessage+" Status Code:"+error.status)._dismissAfter(10000);
    
      //  }
    )
    }catch(error)
    {
      this.snackbar.open("Something went wrong! Please Try again after some time.... Error->"+error)._dismissAfter(10000);
    }

  }

}
