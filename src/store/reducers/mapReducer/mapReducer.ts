import { PayloadAction, createAction, createReducer } from "@reduxjs/toolkit";
import { Coordinate, MapStateType, Route } from "./mapReducer-types";

export const SELECT_ROUTE = createAction<number>("SELECT_ROUTES_DATA");
export const SET_ROUTE_TRACK = createAction<Coordinate>("SET_ROUTE_TRACK");
export const ROUTE_TRACK_REQUEST = createAction<Route | {}>("ROUTE_TRACK_REQUEST");
export const ROUTE_TRACK_REQUEST_ERROR = createAction<string>("ROUTE_TRACK_REQUEST_ERROR");

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

export const mapReducer = createReducer(initialState, {
  [SELECT_ROUTE.type]: (
    state: MapStateType,
    action: PayloadAction<number>
  ) => {
    const selectRouteNumber = action.payload;
    const selectedRoutesData = initialState.routesData.find((el) => el.routeNumber === selectRouteNumber) || {};    

    const updatedState: MapStateType = {
      ...state,
      selectedRoutesData,
    };
    return updatedState;
  },
  [SET_ROUTE_TRACK.type]: (
    state: MapStateType,
    action: PayloadAction<Coordinate>
  ) => {
    
    const currentRouteTrackData = action.payload;
  
    
    const updatedState: MapStateType = {
      ...state,
      currentRouteTrackData,
    };
    // console.log("currentRouteTrackData", currentRouteTrackData);
    
    return updatedState;
  },
});

export default mapReducer;