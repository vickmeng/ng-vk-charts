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
        this.Ys.forEach( (theY, index) => {
            theY.value = 'Yvalue' + index;
            theY.key = 'Ykey' + index;
            const { key, value} = theY;
            const fields = theY.fields.map(field => this.getRenamed(field));
            // XXX 多次fold导致复杂度变高了，有印象可以创建多个view
            this.dv.transform({
                type: 'fold',
                fields, key, value
            });
        });
    }

    handleDraw = () => { // 覆盖父类
        this.Ys.forEach(
                theY => (
                    this.handleDrawOneGroupShapes(this.X, theY),
                    this.handleDrawAxis(theY)
                )
            );
    }

    handleDrawAxis = (theY: Y) => {
        this.chart.axis(theY.value, {
            label: {
                formatter(val) {
                    return val + (theY.unit || '');
                }
            }
        });

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
        const lines = this.chart.line().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
        if (theY.lineShape) {
            lines.shape(theY.lineShape);
        }
    }

    handleDrawOneGroupPoint = (theX: X, theY: Y) => {
        this.chart.point().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
    }

    handleDrawOneGroupArea = (theX: X, theY: Y) => {
        this.chart.area().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
    }

}
