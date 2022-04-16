import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './shared/common/common.component';
import { CompanyComponent } from './shared/company/company.component';
import { MainviewComponent } from './shared/mainview/mainview.component';

const routes: Routes = [{

  path:'',
  component:CommonComponent,
  children:[{
    path:'',
    component:MainviewComponent,
  },{
    path:'company/:symbol',
    component:CompanyComponent
  }]

}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
