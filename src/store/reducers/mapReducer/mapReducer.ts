import { PayloadAction, createAction, createReducer } from "@reduxjs/toolkit";
import { Coordinate, MapStateType, Route } from "./mapReducer-types";
import { initialState } from "./initialState";

export const SELECT_ROUTE = createAction<number>("SELECT_ROUTES_DATA");
export const SET_ROUTE_TRACK = createAction<Coordinate>("SET_ROUTE_TRACK");
export const ROUTE_TRACK_REQUEST = createAction<Route | {}>("ROUTE_TRACK_REQUEST");


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
    
    return updatedState;
  },
});

export default mapReducer;