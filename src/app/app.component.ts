import { Component, AfterViewInit } from '@angular/core';
import * as G2 from '../../projects/ng-vk-charts/node_modules/@antv/g2';
import { View } from '../../projects/ng-vk-charts/node_modules/@antv/data-set';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor() {

  }

  ngAfterViewInit() {
    // const data = [{
    //   time: 1246406400000,
    //   a: 14.3
    // }, {
    //   time: 1246492800000,
    //   a: 14.5
    // }];
    // const averages = [{
    //   time: 1246406400000,
    //   b: 121.5
    // }, {
    //   time: 1246492800000,
    //   b: 222.1
    // }];

    // const dv1 = new View();
    // const dv2 = new View();

    // const chart = new G2.Chart({
    //   container: 'mountNode',
    //   forceFit: true,
    //   padding: 50,
    //   height: 500
    // });
    // const view1 = chart.view();
    // view1.source(dv1);
    // view1.line().position('time*a');

    // const view2 = chart.view();
    // view2.source(dv2);

    // view2.axis('b', {position: 'right'});
    // view2.line().position('time*b');
    // chart.render();

    // dv1.source(data);
    // dv2.source(averages);

  }
}
