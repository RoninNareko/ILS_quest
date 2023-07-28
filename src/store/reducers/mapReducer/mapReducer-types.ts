export type Point = {
    latitude: number;
    longitude: number;
  };
  
  export type Route = {
    routeNumber: string;
    points: Point[];
  };
  
  export interface MapStateType {
    routesData:Route[]
  }