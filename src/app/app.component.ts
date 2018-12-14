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
    beijing_t: 30,
    shanghai_t: 5,
    beijing_h: 3,
    shanghai_h: 5,
  }, {
    date: '1992',
    beijing_t: 10,
    shanghai_t: 35,
    beijing_h: 32,
    shanghai_h: 15,
  }, {
    date: '1993',
    beijing_t: 23,
    shanghai_t: 15,
    beijing_h: 23,
    shanghai_h: 15,
  }];

  // @ViewChild(TrendDirective)
  // set appBacon(directive: TrendDirective) {
  //   this.$myTrend = directive;
  // }

  constructor() {
  }

  ngAfterViewInit() {
  }

  change() {
    this.chartData = [{
      date: '1991',
      beijing_t: 100 * Math.random(),
      shanghai_t: 100 * Math.random(),
      beijing_h: 100 * Math.random(),
      shanghai_h: 100 * Math.random(),
    }, {
      date: '1992',
      beijing_t: 100 * Math.random(),
      shanghai_t: 100 * Math.random(),
      beijing_h: 100 * Math.random(),
      shanghai_h: 100 * Math.random(),
    }, {
      date: '1993',
      beijing_t: 100 * Math.random(),
      shanghai_t: 100 * Math.random(),
      beijing_h: 100 * Math.random(),
      shanghai_h: 100 * Math.random(),
    }];
  }
}
