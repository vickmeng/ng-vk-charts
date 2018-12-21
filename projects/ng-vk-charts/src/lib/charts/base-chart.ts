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
     // chart主体
    chart;
    dv = new View();
    // O
    data$;
    // S
    private dataSubject = new Subject();
    // 是否自适应尺寸
    @Input()forceFit = true;
    // 回压控制的时间
    @Input() debounceTime = defaultDebounceTime;
    // 重命名映射
    @Input() rename: RenameMap;
    // 数据入口
    @Input() set data(data: any[]) {
        this.dataSubject.next(data);
    }

    constructor(
        public elementRef: ElementRef,
    ) {
        this.data$ = this.dataSubject
            .asObservable()
            .pipe(
                debounceTime(this.debounceTime)
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
        this.handleDraw();
        this.chart.render();
    }

    handleDraw() {} // 等待子类覆盖，绘制

    getPosition = (theX: X , theY: Y): string => {
        return `${this.getRenamed(theX.key)}*${this.getRenamed(theY.value)}`;
    }

    getRenamed = (field): string => {
        return this.rename ? this.rename[field] || field : field;
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
