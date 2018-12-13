import { Component,
  AfterViewInit ,
  // ViewChild,
  // ViewChildren,
  // ContentChild,
} from '@angular/core';
import { TrendDirective } from 'projects/ng-vk-charts/src/lib/charts/trend/trend.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  $myTrend: TrendDirective;
  chartData = [{
    date: '1991',
    CHN: 30,
    USA: 5,
  }, {
    date: '1992',
    CHN: 41,
    USA: 4,

  }, {
    date: '1993',
    CHN: 35,
    USA: 3,
  }];

  // @ViewChild(TrendDirective)
  // set appBacon(directive: TrendDirective) {
  //   this.$myTrend = directive;
  // }

  constructor() {
  }

  ngAfterViewInit() {
    // this.$myTrend.data$.subscribe(console.log);

  }

  change() {
    this.chartData = [{
      date: '1991',
      CHN: 100 * Math.random(),
      USA: 100 * Math.random(),
    }, {
      date: '1992',
      CHN: 100 * Math.random(),
      USA: 100 * Math.random(),
    }, {
      date: '1993',
      CHN: 100 * Math.random(),
      USA: 100 * Math.random(),
    }];
  }
}
