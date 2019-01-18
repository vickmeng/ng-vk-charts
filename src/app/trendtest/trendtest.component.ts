import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {X, Y, ChartDataType} from 'projects/ng-vk-charts/src/lib/charts/model';

@Component({
  selector: 'app-trendtest',
  templateUrl: './trendtest.component.html',
  styleUrls: ['./trendtest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendtestComponent implements OnInit {
  chartData: ChartDataType[] = [{
    date: '1991',
    beijing_t: 1000 * Math.random(),
    shanghai_t: 1000 * Math.random(),
    beijing_h: 1000 * Math.random(),
    shanghai_h: 1000 * Math.random(),
  }, {
    date: '1992',
    beijing_t: 1000 * Math.random(),
    shanghai_t: 1000 * Math.random(),
    beijing_h: 1000 * Math.random(),
    shanghai_h: 1000 * Math.random(),
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
        position: 'left'
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
        },
        position: 'right'
      },
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.chartData = [{
      date: '1991',
      beijing_t: 1000 * Math.random(),
      shanghai_t: 1000 * Math.random(),
      beijing_h: 1000 * Math.random(),
      shanghai_h: 1000 * Math.random(),
    }, {
      date: '1992',
      beijing_t: 1000 * Math.random(),
      shanghai_t: 1000 * Math.random(),
      beijing_h: 1000 * Math.random(),
      shanghai_h: 1000 * Math.random(),
    }];
  }
}
