export type Point = {
    latitude: number;
    longitude: number;
  };
  
  export type Route = {
    routeNumber: number;
    points: Point[];
  };
  
  export interface MapStateType {
    selectedRoute:Route|{},
    routesData:Route[]
  }