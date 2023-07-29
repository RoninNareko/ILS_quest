import { MapStateType } from "./mapReducer-types";

export const initialState:MapStateType = {
    currentRouteTrackData:[],
    selectedRoutesData:{},
    routesData:[
        {
          routeNumber: 1,
          points: [
            { latitude: 59.84660399, longitude: 30.29496392 },
            { latitude: 59.82934196, longitude: 30.42423701 },
            { latitude: 59.83567701, longitude: 30.38064206 },
          ],
        },
        {
          routeNumber: 2,
          points: [
            { latitude: 59.82934196, longitude: 30.42423701 },
            { latitude: 59.82761295, longitude: 30.41705607 },
            { latitude: 59.84660399, longitude: 30.29496392 },
          ],
        },
        {
          routeNumber: 3,
          points: [
            { latitude: 59.83567701, longitude: 30.38064206 },
            { latitude: 59.84660399, longitude: 30.29496392 },
            { latitude: 59.82761295, longitude: 30.41705607 },
          ],
        },
      ]
};
