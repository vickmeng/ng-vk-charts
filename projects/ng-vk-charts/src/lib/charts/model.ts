/**
 * item start
 */
export interface TrendItem {
    date: string | number;
    value: string | number;
}

export interface PieItem { // 再说
    item: string;
    count: string | number;
    percent?: number;
}

export type Item = TrendItem | PieItem;

/**
 * item end
 */

/**
 * shape start
 */
export type LineShape = 'line'|'smooth'|'dot'|'dash'|'spline';
export type PointShape = 'circle'|'square'|'bowtie'|'diamond'|
'hexagon'|'triangle'|'triangle-down'|
'hollowCircle'|'hollowSquare'|'hollowBowtie'|'hollowDiamond'|
'hollowHexagon'|'hollowTriangle'|'hollowTriangle-down'|
'cross'|'tick'|'plus'|'hyphen'|'line';

export interface ShapeOption {
    opacity?: number;
}

export interface LineOption extends ShapeOption {
    shape?: LineShape;
}

export interface PointOption extends ShapeOption {
    shape?: PointShape;
}
/**
 * shape end
 */

/**
 * transform
 */
export interface TransformOptions {
    defaultTrendNameMap: string;
}

