import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  chartData = [{
    country: 'CHN',
    date: '1991',
    value: 30
  }, {
    country: 'CHN',
    date: '1992',
    value: 41
  }, {
    country: 'CHN',
    date: '1993',
    value: 3
  }, {
    country: 'USA',
    date: '1994',
    value: 5
  }, {
    country: 'USA',
    date: '1995',
    value: 11
  }, {
    country: 'USA',
    date: '1996',
    value: 11
  }];

  constructor() {
  }

  change() {
    this.chartData  = [{
      country: 'CHN',
      date: '1991',
      value: 100 * Math.random()
    }, {
      country: 'CHN',
      date: '1992',
      value: 100 * Math.random()
    }, {
      country: 'CHN',
      date: '1993',
      value: 100 * Math.random()
    }, {
      country: 'USA',
      date: '1994',
      value: 100 * Math.random()
    }, {
      country: 'USA',
      date: '1995',
      value: 100 * Math.random()
    }, {
      country: 'USA',
      date: '1996',
      value: 100 * Math.random()
    }];

  }
}
