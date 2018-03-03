declare module "@mapbox/sphericalmercator" {
  export type Coordinates = [ number, number ];
  export type Pixels = [ number, number ];

  export type BoundingBox = [ number, number, number, number ];
  export type XYBounds = { minX: number, maxX: number, miny: number, maxY: number };

  export type Options = {
    size: number
  }

  export enum Projection {
    WGS84 = 'WGS84',
    _900913 = '900913'
  }

  export type SphericalMercator = {
    px: (coordinate: Coordinates, zoom: number) => Pixels;
    ll: (pixels: Pixels, zoom: number) => Coordinates;
    bbox: (x: number, y: number, zoom: number, tms_style: boolean, srs: Projection) => BoundingBox;
    xyz: (bbox: BoundingBox, zoom: number, tms_style: boolean, srs: Projection) => XYBounds;

    convert: (bbox: BoundingBox, to: Projection) => BoundingBox;
    forward: (ll: Coordinates) => Pixels;
    inverse: (xy: Pixels) => Coordinates;
  }
}
