import { Input, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import { RenameMap} from './model';
import * as G2 from '@antv/g2';
import { View } from '@antv/data-set';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { defaultDebounceTime } from './const';
import { X , Y } from './model';
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

export class BaseChart implements OnInit, AfterViewInit {
    chart;
    dv = new View();
    initData = [];
    forceFit = true;
    private dataSubject = new Subject();
    data$;

    @Input()defaultDebounceTime = defaultDebounceTime;

    @Input() rename: RenameMap = {};

    @Input() set data(data: any[]) {
        this.dataSubject.next(data);
    }

    constructor(
        public elementRef: ElementRef,
    ) {
        this.data$ = this.dataSubject
            .asObservable()
            .pipe(
                debounceTime(this.defaultDebounceTime)
            );
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

    getPosition = (theX: X , theY: Y): string => {
        return `${this.getRenamed(theX.key)}*${this.getRenamed(theY.value)}`;
    }

    getRenamed = (field): string => {
        return this.rename[field] || field;
    }

    handleTransform = () => (this.handleRename(), this.handleLastTransform());

    handleLastTransform = () => { // XXX 子类覆盖 这块不太好，但我不知道怎么描述了
    }

    handleRename = () => {
        if (this.rename) {
            this.dv.transform({
                type: 'rename',
                map: this.rename,
            });
        }
    }

    handleLoadData = data => this.dv.source(data);
}
