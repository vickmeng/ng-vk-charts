/**
 * item start
 */
// export interface TrendItem {
//     date: string | number;
//     value: string | number;
// }

// export interface PieItem { // 再说
//     item: string;
//     count: string | number;
//     percent?: number;
// }

// export type Item = TrendItem | PieItem;

/**
 * item end
 */

/**
 * shape start
 */
export type LineShapeTypes = 'line'|'smooth'|'dot'|'dash'|'spline';

export type PointShapeTypes = 'circle'|'square'|'bowtie'|'diamond'|
'hexagon'|'triangle'|'triangle-down'|
'hollowCircle'|'hollowSquare'|'hollowBowtie'|'hollowDiamond'|
'hollowHexagon'|'hollowTriangle'|'hollowTriangle-down'|
'cross'|'tick'|'plus'|'hyphen'|'line';

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
