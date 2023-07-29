import { PayloadAction, createAction, createReducer } from "@reduxjs/toolkit";
import { MapStateType } from "./mapReducer-types";

export const SELECT_ROUTE = createAction<number>("SELECT_ROUTE");

export const initialState:MapStateType = {
    selectedRoute:{},
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
    const selectedRoute = initialState.routesData.find((el) => el.routeNumber === selectRouteNumber) || {};    
    console.log("selectedRoute", selectedRoute);

    const updatedState: MapStateType = {
      ...initialState,
      selectedRoute,
    };
    return updatedState;
  },
});

export default mapReducer;