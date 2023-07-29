export type Point = {
    latitude: number;
    longitude: number;
  };
  
  export type Route = {
    routeNumber: number;
    points: Point[];
  };

  export type Coordinate = [number, number];
  export interface MapStateType {
    selectedRoutesData:Route|{},
    currentRouteTrackData:Coordinate | [],
    routesData:Route[]
  }