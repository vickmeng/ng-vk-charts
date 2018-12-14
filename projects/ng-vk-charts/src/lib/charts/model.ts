export interface X {
    key: string;
}

export type Shape = 'point' | 'line' | 'area';

export interface Y {
    fields: string[];
    colors: string[];
    shapes: Shape[];
    key?: string;
    value?: string;
    unit ?: string;
    lineShape?: LineShapeTypes;
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
