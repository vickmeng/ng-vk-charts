import { Directive, ElementRef, Input} from '@angular/core';
import { BaseChart } from '../base-chart';
import { X, Y , ShapeType, ScaleConfig} from '../model';
import { unique } from '../utils';

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

    handleLastTransform = () => this.handleFold(); // 覆盖

    handleFold = () => {// 数据分组
        this.Ys.forEach( (theY, index) => {
            theY.value = 'Yvalue' + index;
            theY.key = 'Ykey' + index;
            const { key, value} = theY;
            const fields = theY.fields.map(field => this.getRenamed(field));
            this.dv.transform({// XXX 多次fold导致复杂度变高了，貌似可以创建多个view
                type: 'fold',
                fields, key, value
            });
        });
    }

    handleDraw = () => (this.handleDrawX(this.X), this.handleDrawYs(this.Ys)); // 绘制覆盖父类

    handleDrawX = (theX: X) => {
        const scaleConfig: ScaleConfig = Object.assign(
            {type: 'cat'}, // 默认连续时序
            theX.scale
        );
        this.chart.scale(this.getRenamed(theX.key), scaleConfig);
    }

    handleDrawYs = (theYs: Y[]) => {
        theYs.forEach(theY => (
            this.handleDrawOneGroupShapes(this.X, theY),
            this.handleDrawAxis(theY)
            )
        );
    }

    handleDrawAxis = (theY: Y) => this.chart.axis(theY.value, theY.axis); // theY.axis是undefined也没关系

    handleDrawOneGroupShapes = (theX: X, theY: Y) => {
        const shapes = unique(theY.shapes);
        shapes.forEach((shape: ShapeType ) => {
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
