import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trendtest',
  templateUrl: './trendtest.component.html',
  styleUrls: ['./trendtest.component.scss']
})
export class TrendtestComponent implements OnInit {
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
    shanghai_h: 115,
  }, {
    date: '1993',
    beijing_t: 223,
    shanghai_t: 15,
    beijing_h: 23,
    shanghai_h: 15,
  },
  {
    date: '1994',
    beijing_t: 23,
    shanghai_t: 15,
    beijing_h: 23,
    shanghai_h: 15,
  },
  {
    date: '1995',
    beijing_t: 3,
    shanghai_t: 115,
    beijing_h: 233,
    shanghai_h: 115,
  },
  {
    date: '1996',
    beijing_t: 233,
    shanghai_t: 125,
    beijing_h: 231,
    shanghai_h: 315,
  }];
  constructor() { }

  ngOnInit() {
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
    }, {
      date: '1994',
      beijing_t: 100 * Math.random(),
      shanghai_t: 100 * Math.random(),
      beijing_h: 100 * Math.random(),
      shanghai_h: 100 * Math.random(),
    }, {
      date: '1995',
      beijing_t: 100 * Math.random(),
      shanghai_t: 100 * Math.random(),
      beijing_h: 100 * Math.random(),
      shanghai_h: 100 * Math.random(),
    }, {
      date: '1996',
      beijing_t: 100 * Math.random(),
      shanghai_t: 100 * Math.random(),
      beijing_h: 100 * Math.random(),
      shanghai_h: 100 * Math.random(),
    }];
  }
}
