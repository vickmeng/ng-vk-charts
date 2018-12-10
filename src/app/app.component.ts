import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flag = true;

  chartData = [{
    date: '1991',
    value: 30
  }, {
    date: '1992',
    value: 41
  }, {
    date: '1993',
    value: 3
  }, {
    date: '1994',
    value: 5
  }, {
    date: '1995',
    value: 11
  }];

  constructor() {
  }

  change() {
    this.chartData = this.flag ?
    [{
      date: '1991',
      value: 3
    }, {
      date: '1992',
      value: 43
    }, {
      date: '1993',
      value: 3
    }, {
      date: '1994',
      value: 5
    }, {
      date: '1995',
      value: 100
    }] : [{
      date: '2000',
      value: 133
    }, {
      date: '2001',
      value: 41
    }, {
      date: '2002',
      value: 3
    }, {
      date: '2003',
      value: 55
    }];
    this.flag = !this.flag;

  }
}
