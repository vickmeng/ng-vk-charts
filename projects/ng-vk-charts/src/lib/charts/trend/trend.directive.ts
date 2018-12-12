import { Directive, ElementRef , OnInit , Input, AfterViewInit} from '@angular/core';
// import * as G2 from '@antv/g2';
import { BaseChart } from '../base-chart';
import { LineOptions } from '../model';
import { FoldOptions } from './../model';

@Directive({
  selector: '[vkTrend]',
})
export class TrendDirective extends BaseChart implements OnInit, AfterViewInit {
    @Input() lines: LineOptions[] ;
    @Input() fold: FoldOptions;

    constructor(public elementRef: ElementRef) {
        super(
            elementRef,
        );
    }
    handleFold = () => {
        if (this.fold) {
            const fold = Object.assign({}, this.fold);
            fold.fields = fold.fields.map(field => this.getRenamed(field));
            this.dv.transform({
                type: 'fold',
                ...fold
            });
        }
    }

    handleDrawShapes = () => { // 覆盖父类
        if (this.lines && this.lines.length) {
            this.handleDrawLines(this.lines);
        }
    }

    handleDrawLines = (lines: LineOptions[]) => {
        lines.forEach(line => this.handleDrawOneLine(line));
    }

    handleDrawOneLine = (lineOptions: LineOptions) => {
        const { position , shape , opacity , color } = lineOptions;
        const line = this.chart.line().position(this.getPosition(position));
        if (shape) {
            line.shape(shape);
        }
        if (opacity) {
            line.opacity(opacity);
        }
        if (color) {
            line.color(color);
        }
    }

}
