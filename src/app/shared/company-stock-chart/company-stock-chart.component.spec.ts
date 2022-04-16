import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStockChartComponent } from './company-stock-chart.component';

describe('CompanyStockChartComponent', () => {
  let component: CompanyStockChartComponent;
  let fixture: ComponentFixture<CompanyStockChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyStockChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyStockChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
