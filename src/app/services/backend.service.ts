import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  stock_api_key='LAZUH9VE2K9NF99C'
  constructor(private httpclient:HttpClient) { }
  search_company(keyword:any){
    let url="https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords="+keyword+"&apikey="+this.stock_api_key
    return this.httpclient.get(url)
  }

  get_specific_company_details(company:any)
  {
    let url="https://www.alphavantage.co/query?function=OVERVIEW&symbol="+company+"&apikey="+this.stock_api_key
    return this.httpclient.get(url)
  }

  get_specific_company_chart(company:any)
  {
    let url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+company+"&apikey="+this.stock_api_key
    return this.httpclient.get(url)
  }
}
