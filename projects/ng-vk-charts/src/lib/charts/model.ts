import { ChartAxisConfig,  } from '@antv/g2';


// export interface TrendAxis {
//     line: any;
//     label: TrendAxisLabel;
// }

// export interface TrendAxisLabel {
//     formatter: ()
// }

export type ScaleType = 'identit'|'linear'|'cat'|'time'|'timeCat'|'log'|'pow';

export interface ScaleConfig {// G2没提供。。。。
    type?: ScaleType; // 指定数据类型，可声明的类型为：identity、linear、cat、time、timeCat、log、pow
    alias?: string; // 数据字段的别名
    formatter?: (v: string) => string; // 格式化文本内容
    range?: [number, number]; // 输出数据的范围，默认[ 0, 1 ]，格式为 [ min, max ]，min 和 max 均为 0 至 1 范围的数据。
    tickCount?: number; // 设置坐标轴上刻度点的个数
    ticks?: string[]; // 用于指定坐标轴上刻度点的文本信息，当用户设置了 ticks 就会按照 ticks 的个数和文本来显示
    sync?: boolean; // 当 chart 存在不同数据源的 view 时，用于统一相同数据属性的值域范围
}

export interface X {
    key: string;
    scale?: ScaleConfig; //
}

export type ShapeType = 'point' | 'line' | 'area';

export interface Y {
    fields: string[];
    shapes: ShapeType[];
    colors?: string[];
    key?: string;
    value?: string;
    lineShape?: LineShapeTypes;
    axis?: ChartAxisConfig;
}

/**
 * shape start
 */
export type LineShapeTypes = 'line'|'smooth'|'dot'|'dash'|'spline';

export type PointShapeTypes = 'circle'|'square'|'bowtie'|'diamond'|
'hexagon'|'triangle'|'triangle-down'|
'hollowCircle'|'hollowSquare'|'hollowBowtie'|'hollowDiamond'|
'hollowHexagon'|'hollowTriangle'|'hollowTriangle-down'|
'cross'|'tick'|'plus'|'hyphen'|'line';

export type AllShapeTypes = LineShapeTypes | PointShapeTypes;

export interface ShapeOptions {
    position: string;
    opacity?: number;
    color?: string;
}

export interface LineOptions extends ShapeOptions {
    shape?: LineShapeTypes;
}

export interface PointOptions extends ShapeOptions {
    shape?: PointShapeTypes;
}
/**
 * shape end
 */

/**
 * transform start
 */
export interface RenameMap {
    [key: string]: string;
}

export interface FoldOptions {
    fields: string[];
    key: string;
    value: string;
}
/**
 * transform end
 */
