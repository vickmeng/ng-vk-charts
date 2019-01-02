import { Directive, ElementRef, Input} from '@angular/core';
import { BaseChart } from '../base-chart';
import { X, Y , ShapeType, ScaleConfig} from '../model';
import { unique } from '../utils';

@Directive({
  selector: '[vkTrend]',
})
export class TrendDirective extends BaseChart {
    @Input() X: X;
    @Input() Ys: [Y] | [Y, Y]; // 这个写法再议

    constructor(public elementRef: ElementRef) {
        super(
            elementRef,
        );
    }

    handleRefreshViewCount = () => this.viewCount = this.Ys.length; // 覆盖

    handleLastTransform = (dv, index) => this.handleFoldTransform(dv, index); // 覆盖

    handleFoldTransform = (dv, index) => {// 数据分组
        const theY = this.Ys[index]; // 找到view对应的Y
        theY.value = 'Yvalue' + index ;
        theY.key = 'Ykey' + index ;
        const { key, value} = theY;
        const fields = theY.fields.map(field => this.getRenamedField(field));
        dv.transform({
            type: 'fold',
            fields, key, value
        });
    }

    handleDraw = () => (this.handleDrawX(this.X), this.handleDrawYs(this.Ys)); // 绘制覆盖父类

    handleDrawX = (theX: X) => {
        const scaleConfig: ScaleConfig = Object.assign(
            {type: 'cat'}, // 默认连续时序
            theX.scale
        );
        this.chart.scale(this.getRenamedField(theX.key), scaleConfig);
    }

    handleDrawYs = (theYs: Y[]) => theYs.forEach((theY, index) => {
            this.handleDrawOneGroupShapes(this.X, theY, this.viewBinders[index].view); // 画图形；
            // XXX dataset的bug，多个Y轴必须重绘，否则不显示
            if (theYs.length > 1) {
                this.repaint = true;
            }
            return this.handleDrawAxis(theY, this.viewBinders[index].view); // 画Y轴；
        }
    )

    handleDrawAxis = (theY: Y, view) => {
        view.axis(theY.value, theY.axis); // theY.axis是undefined也没关系
    }

    handleDrawOneGroupShapes = (theX: X, theY: Y, view) => {
        const shapes = unique(theY.shapes);
        shapes.forEach((shape: ShapeType ) => {
            switch (shape) {
                case 'line':
                    return this.handleDrawOneGroupLine(theX, theY, view);
                case 'point':
                    return this.handleDrawOneGroupPoint(theX, theY, view);
                case 'area':
                    return this.handleDrawOneGroupArea(theX, theY, view);
                case 'lineStack':
                    return this.handleDrawOneGroupLineStack(theX, theY, view);
                case 'areaStack':
                    return this.handleDrawOneGroupAreaStack(theX, theY, view);
                default:
                    break;
            }
        });
    }

    handleDrawOneGroupLine = (theX: X, theY: Y, view) => {
        const lines = view.line().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
        if (theY.lineShape) {
            lines.shape(theY.lineShape);
        }
    }

    handleDrawOneGroupPoint = (theX: X, theY: Y, view) => {
        view.point().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
    }

    handleDrawOneGroupArea = (theX: X, theY: Y, view) => {
        view.area().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
    }

    handleDrawOneGroupLineStack = (theX: X, theY: Y, view) => {
        view.lineStack().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
    }

    handleDrawOneGroupAreaStack = (theX: X, theY: Y, view) => {
        view.areaStack().position(this.getPosition(theX, theY)).color(theY.key, theY.colors);
    }

}
