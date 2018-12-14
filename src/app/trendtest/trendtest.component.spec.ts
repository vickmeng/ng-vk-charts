import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendtestComponent } from './trendtest.component';

describe('TrendtestComponent', () => {
  let component: TrendtestComponent;
  let fixture: ComponentFixture<TrendtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
