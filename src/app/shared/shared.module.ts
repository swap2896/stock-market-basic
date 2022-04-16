import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';






import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CommonComponent } from './common/common.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainviewComponent } from './mainview/mainview.component';
import { CompanyComponent } from './company/company.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { CompanyStockChartComponent } from './company-stock-chart/company-stock-chart.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CommonComponent,
    MainviewComponent,
    CompanyComponent,
    CompanyStockChartComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatButtonModule,
    HighchartsChartModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
