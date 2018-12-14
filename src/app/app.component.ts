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
  // $myTrend: TrendDirective;


  // @ViewChild(TrendDirective)
  // set appBacon(directive: TrendDirective) {
  //   this.$myTrend = directive;
  // }

  constructor() {
  }

  ngAfterViewInit() {
  }


}
