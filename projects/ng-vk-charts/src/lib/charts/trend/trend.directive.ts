import { Directive, ElementRef , OnInit , Input, AfterViewInit} from '@angular/core';
// import * as G2 from '@antv/g2';
import { BaseChart } from '../base-chart';
import { LineOption, PointOption } from '../model';
import { defaultTrendNameMap } from '../const';

@Directive({
  selector: '[vkTrend]',
})
export class TrendDirective extends BaseChart implements OnInit, AfterViewInit {
    @Input() line: LineOption ;
    @Input() point: PointOption ;

    constructor(public elementRef: ElementRef) {
        super(
            elementRef,
            {defaultTrendNameMap}
        );
    }

    handleDrawShapes() { // 覆盖父类
        if (this.line) {
            this.handleDrawLine();
        }
        if (this.point) {
            this.handleDrawPoint();
        }
    }

    handleDrawLine() {
        const line = this.chart.line().position(this.getPosition());
        if (this.line.shape) {
            line.shape(this.line.shape);
        }
        if (this.line.opacity) {
            line.opacity(this.line.opacity);
        }
    }

    handleDrawPoint() {
        const point = this.chart.point().position(this.getPosition());
        if (this.point.shape) {
            point.shape(this.point.shape);
        }
        if (this.point.opacity) {
            point.opacity(this.point.opacity);
        }
    }
}
