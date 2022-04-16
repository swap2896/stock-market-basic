import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BackendService } from 'src/app/services/backend.service';

export class company_data{
  Symbol:string='';
  Name:string='';
  ReportDate:string='';
  FiscalDate:string=''
  Estimate:string=''
  Currency:string=''
}

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss']
})
export class MainviewComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  public records: any[] = [];
  isloading:boolean=false;
  displayedColumns: string[] = ['Symbol','Name','ReportDate','FiscalDate','Estimate','Currency'];
  // paginator: MatPaginator | null;
  constructor(private service:BackendService,private snackbar:MatSnackBar,private httpclient: HttpClient) { }
  companies:any=[]
  all_companies_data:company_data[]=[]
  dataSource: MatTableDataSource<company_data>=new MatTableDataSource<company_data>([]);
  errormessage:string=''
  applysearchFilter(event:Event)
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    try{
    this.service.search_company(filterValue).subscribe(
      (result:any)=>{
        this.companies=[]
        // this.companies=result.bestMatches
        try{
        for(let i=0;i<result.bestMatches.length;i++)
        { 
          let name:string=result.bestMatches[i]['2. name']
          let symbol:string=result.bestMatches[i]['1. symbol']
          let type:string=result.bestMatches[i]['3. type']
          let temp=[]
          temp.push(name)
          temp.push(symbol)
          temp.push(type)
          this.companies.push(temp)
        }
      }catch(error)
      {
        this.snackbar.open("Something went wrong! Please Try again after some time.... Error->"+result.Information)._dismissAfter(10000);
      }

        
      }
     
    )
      }catch(error)
      {
        this.snackbar.open("Something went wrong! Please Try again after some time.... Error->"+error)._dismissAfter(10000);
      }
  }

 
  
  ngOnInit(): void {
    this.isloading=true;
    //for localhost try assets/earnings_calendar.csv
    this.httpclient.get('assets/earnings_calendar.csv', {responseType: 'text'})
    .subscribe(
        (data:any) => {
            let result=data.split('\r\n');
            this.all_companies_data=[]
            for(var i=0;i<result.length;i++)
            {
            let company=new company_data;
            let comp=result[i]
            comp=comp.split(',')
            company.Symbol=comp[0]
            company.Name=comp[1]
            company.ReportDate=comp[2]
            company.FiscalDate=comp[3]
            company.Estimate=comp[4]
            company.Currency=comp[5]
            this.all_companies_data.push(company)
            }
            this.dataSource=new MatTableDataSource(this.all_companies_data)
            this.dataSource.sort = this.sort;
            this.dataSource.paginator=this.paginator;
            this.isloading=false;
        }
    );
   

}
}
