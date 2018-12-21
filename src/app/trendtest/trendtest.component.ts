import { Component, OnInit } from '@angular/core';
import {X, Y} from 'projects/ng-vk-charts/src/lib/charts/model';

@Component({
  selector: 'app-trendtest',
  templateUrl: './trendtest.component.html',
  styleUrls: ['./trendtest.component.scss']
})
export class TrendtestComponent implements OnInit {
  chartData = [{
    date: 1991,
    beijing_t: 30,
    shanghai_t: 5,
    beijing_h: 3,
    shanghai_h: 5,
  }, {
    date: 1992,
    beijing_t: 10,
    shanghai_t: 35,
    beijing_h: 32,
    shanghai_h: 115,
  }, {
    date: 1993,
    beijing_t: 223,
    shanghai_t: 15,
    beijing_h: 23,
    shanghai_h: 15,
  },
  {
    date: 1994,
    beijing_t: 23,
    shanghai_t: 15,
    beijing_h: 23,
    shanghai_h: 15,
  },
  {
    date: 1995,
    beijing_t: 3,
    shanghai_t: 115,
    beijing_h: 233,
    shanghai_h: 115,
  },
  {
    date: 1996,
    beijing_t: 233,
    shanghai_t: 125,
    beijing_h: 231,
    shanghai_h: 315,
  }];
  rename = {date: '年', beijing_t: '北京温度', shanghai_t: '上海温度', beijing_h: '北京湿度', shanghai_h: '上海湿度'};

  X: X = {key: 'date'};

  Ys: Y[] = [
    {
      fields: ['beijing_t', 'shanghai_t'],
      shapes: ['line', 'point'],
      lineShape: 'smooth',
      axis: {
        label: {
          formatter: (v: string) => v + '℃',
        },
        line: {
          stroke: 'pink'
        },
      }
    },
    {
      fields: ['beijing_h', 'shanghai_h'],
      shapes: ['line'],
      lineShape: 'dash',
      axis: {
        label: {
        },
        line: {
          stroke: 'skyBlue'
        }
      }
    }
  ];

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
