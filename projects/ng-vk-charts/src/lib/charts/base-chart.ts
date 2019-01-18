import { Input, ElementRef, OnInit, AfterViewInit , OnChanges, SimpleChanges, } from '@angular/core';
import { RenameMap, ChartDataType, ViewBinder } from './model';
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

export class BaseChart implements OnInit, AfterViewInit, OnChanges {
     // chart主体
    chart;
    // dv = new View();
    viewCount = 1; // 有多少个view
    viewBinders: Array<ViewBinder | null>;
    // S
    private dataSubject = new Subject();
    // O
    data$;
    // 是否自适应尺寸
    @Input()forceFit = true;
    // 刷新数据是否重绘，没有动画了 1. XXX弥补trendchart的Y轴bug，2. 自定义loading
    @Input()repaint = false;
    // 回压控制的时间
    @Input() debounceTime = defaultDebounceTime;
    // 重命名映射
    @Input() rename: RenameMap = {};
    // 数据入口
    @Input() data: ChartDataType[];

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

    ngOnInit() {}

    ngOnChanges (changes: SimpleChanges) {
        this.dataSubject.next(changes.data.currentValue);
    }

    ngAfterViewInit() {
        const hostElement = this.elementRef.nativeElement;
        this.chart = new G2.Chart({
            padding: 100,
            container: hostElement,
            forceFit: this.forceFit,
        });
        this.handleRefreshViewCount();
        this.handleBindSource();
        this.handleTransform();
        this.handleDraw();
        this.chart.render();
    }

    handleRefreshViewCount = () => this.viewCount = 1; // 选择性覆盖

    handleBindSource = () => {
        this.viewBinders = new Array(this.viewCount).fill(null); // 牢记fill引用的坑
        this.viewBinders = this.viewBinders.map(binder => {
            const dv = new View();
            const view = this.chart.view();
            view.source(dv);
            return {
                dv, view
            };
        });
    }

    handleDraw() {} // 等待子类覆盖，绘制

    getPosition = (theX: X , theY: Y): string => `${this.getRenamedField(theX.key)}*${this.getRenamedField(theY.value)}`;

    getRenamedField = (field): string => {
        return this.rename ? this.rename[field] || field : field;
    }

    handleTransform = () => this.viewBinders.forEach((binder, index) => {
        this.handleRenameTransform(binder.dv, index);
        return this.handleLastTransform(binder.dv, index);
    })

    handleLastTransform: (dv, index) => void = (dv, index) => {}; // XXX 子类覆盖 这块不太好，但我不知道怎么描述了

    handleRenameTransform = (dv, index) => {
        dv.transform({
            type: 'rename',
            map: this.rename,
        });
    }

    handleLoadData = data => {
        this.viewBinders.forEach(binder => binder.dv.source(data));
        if (this.repaint) {
            this.chart.repaint();
        }
    }
}
