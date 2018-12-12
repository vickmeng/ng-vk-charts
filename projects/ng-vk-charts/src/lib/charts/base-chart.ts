import { Input, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import { Item, TrendItem, TransformOptions } from './model';
import * as G2 from '@antv/g2';
import { View } from '@antv/data-set';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { defaultDebounceTime } from './const';
/**
 * 根类
 * 负责主要逻辑：
 *
 * 创建chart
 * 更新数据
 * 数据转换
 * 回压处理
 * ......
 */

export class BaseChart  implements OnInit, AfterViewInit {
    chart;
    dv = new View();
    initData: Item[] = [];
    forceFit = true;
    @Input()defaultDebounceTime = defaultDebounceTime;
    dataSubject = new Subject();
    data$ = this.dataSubject
        .asObservable()
        .pipe(
            debounceTime(this.defaultDebounceTime)
        );

    @Input() renameMap: TrendItem;

    @Input() set data(data: Item[]) {
        this.dataSubject.next(data);
    }
    constructor(
        public elementRef: ElementRef,
        private transformOptions: TransformOptions
    ) {
        this.data$.subscribe(
            this.handleLoadData
        );
    }

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
        if (this.renameMap) { // 需要rename的情况，一般都需要
            const {date = 'date' , value = 'value'} = this.renameMap;
            return `${date}*${value}`;
        }
        return this.transformOptions.defaultNameMap; // 默认name
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

    handleLoadData = (data) => {
        this.dv.source(data);
    }
}
