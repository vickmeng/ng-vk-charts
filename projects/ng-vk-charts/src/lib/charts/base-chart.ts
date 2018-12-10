import { Input, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import { Item, TrendItem, TransformOptions } from './model';
import * as G2 from '@antv/g2';
import { View } from '@antv/data-set';

export class BaseChart  implements OnInit, AfterViewInit {
    chart;
    dv = new View();
    initData: Item[] = [];
    forceFit = true;
    @Input() renameMap: TrendItem;

    @Input() set data(data: Item[]) {
        this.handleLoadData(data); // 首次初始化值
    }
    constructor(
        public elementRef: ElementRef,
        private transformOptions: TransformOptions
    ) {}

    ngOnInit() {
        this.handleTransform();
    }

    ngAfterViewInit() {
        const hostElement = this.elementRef.nativeElement;
        this.chart = new G2.Chart({
            container: hostElement,
            forceFit: this.forceFit,
        });
        this.chart.source(this.dv);
        this.handleDrawShapes();
        this.chart.render();
    }

    handleDrawShapes() {} // 子类覆盖

    getPosition(): string {
        if (this.renameMap) { // 需要rename
            const {date = 'date' , value = 'value'} = this.renameMap;
            return `${date}*${value}`;
        }
        return this.transformOptions.defaultTrendNameMap; // 默认name
    }

    handleTransform() {
        if (this.renameMap) {
            this.handleRename();
        }
    }

    handleRename() {
        this.dv.transform({
            type: 'rename',
            map: this.renameMap,
        });
    }

    handleLoadData(data) {
        this.dv.source(data);
    }
}
