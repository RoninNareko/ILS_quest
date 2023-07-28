import { createAction, createReducer } from "@reduxjs/toolkit";
import { MapStateType, Route } from "./mapReducer-types";

// export const GET_CATEGORIES = createAction<any[]>("GET_CATEGORIES");
export const initialState:MapStateType = {
    // @ts-ignore
    routesData:[
        {
          routeNumber: "Маршрут №1",
          points: [
            { latitude: 59.84660399, longitude: 30.29496392 },
            { latitude: 59.82934196, longitude: 30.42423701 },
            { latitude: 59.83567701, longitude: 30.38064206 },
          ],
        },
        {
          routeNumber: "Маршрут №2",
          points: [
            { latitude: 59.82934196, longitude: 30.42423701 },
            { latitude: 59.82761295, longitude: 30.41705607 },
            { latitude: 59.84660399, longitude: 30.29496392 },
          ],
        },
        {
          routeNumber: "Маршрут №3",
          points: [
            { latitude: 59.83567701, longitude: 30.38064206 },
            { latitude: 59.84660399, longitude: 30.29496392 },
            { latitude: 59.82761295, longitude: 30.41705607 },
          ],
        },
      ]
};

export const mapReducer = function (state = initialState) {
    return state    
};
export default mapReducer;