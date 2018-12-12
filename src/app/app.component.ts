import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  chartData = [{
    date: '1991',
    CHN: 30,
    USA: 5,
    JAN: 10,
  }, {
    date: '1992',
    CHN: 41,
    USA: 4,
    JAN: 30,

  }, {
    date: '1993',
    CHN: 35,
    USA: 3,
    JAN: 7,

  }];

  constructor() {
  }

  change() {
    this.chartData = [{
      date: '1991',
      CHN: 100 * Math.random(),
      USA: 100 * Math.random(),
      JAN: 100 * Math.random(),
    }, {
      date: '1992',
      CHN: 100 * Math.random(),
      USA: 100 * Math.random(),
      JAN: 100 * Math.random(),
    }, {
      date: '1993',
      CHN: 100 * Math.random(),
      USA: 100 * Math.random(),
      JAN: 100 * Math.random(),
    }];

  }
}
