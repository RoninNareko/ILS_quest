import { combineReducers } from "@reduxjs/toolkit";
import mapReducer from "./mapReducer/mapReducer";

export default combineReducers({
  map: mapReducer,
});