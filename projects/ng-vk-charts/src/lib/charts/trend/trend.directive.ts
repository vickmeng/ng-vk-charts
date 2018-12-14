import { Directive, ElementRef, Input} from '@angular/core';
import { BaseChart } from '../base-chart';
import { X, Y , Shape} from '../model';

@Directive({
  selector: '[vkTrend]',
})
export class TrendDirective extends BaseChart {
    @Input() X: X;
    @Input() Ys: Y[];

    constructor(public elementRef: ElementRef) {
        super(
            elementRef,
        );
    }
    handleLastTransform = () => {
        this.Ys.forEach( (theY, index) => { // XXX jisua
            theY.value = 'Yvalue' + index;
            theY.key = 'Ykey' + index;
            const { key, value} = theY;
            const fields = theY.fields.map(field => this.getRenamed(field));
            if (fields.length > 1) {
                this.dv.transform({// XXX 复杂度变高了
                    type: 'fold',
                    fields, key, value
                });
            }
        });
    }


    handleDrawShapes = () => { // 覆盖父类
        this.Ys.forEach(theY => this.handleDrawOneGroupShapes(this.X, theY));
    }

    handleDrawOneGroupShapes = (theX: X, theY: Y) => {
        theY.shapes.forEach((shape: Shape ) => {
            switch (shape) {
                case 'line':
                    return this.handleDrawOneGroupLine(theX, theY);
                case 'point':
                    return this.handleDrawOneGroupPoint(theX, theY);
                case 'area':
                    return this.handleDrawOneGroupArea(theX, theY);
                default:
                    break;
            }
        });
    }

    handleDrawOneGroupLine = (theX: X, theY: Y) => {
        this.chart.line().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
    }

    handleDrawOneGroupPoint = (theX: X, theY: Y) => {
        this.chart.point().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
    }

    handleDrawOneGroupArea = (theX: X, theY: Y) => {
        this.chart.area().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
    }

}
