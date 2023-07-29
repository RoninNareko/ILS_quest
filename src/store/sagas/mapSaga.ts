import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ROUTE_TRACK_REQUEST, SET_ROUTE_TRACK } from '../reducers/mapReducer/mapReducer';
import { Points, RouteData } from './mapSaga-types';

// @ts-ignore
function* fetchRouteCoordinates(action) {
    
    const { points } = action.payload;
    
  if (points) {
    try {
      const coordinatesString = points
        .map((point:Points) => `${point.latitude},${point.longitude}`)
        .join(";");
        
      const url = `http://router.project-osrm.org/route/v1/driving/${coordinatesString}?overview=false`;
      // @ts-ignore
      const response = yield call(axios.get, url);
      
      const routeCoordinates = response.data.waypoints.map((el:RouteData)=>el.location);
    
      yield put({ type: SET_ROUTE_TRACK.type, payload: routeCoordinates });
    } catch (error) {
        // @ts-ignore
      console.log(error);
      
    }
  }
  }
  function* watchFetchRoute() {
    yield takeLatest(ROUTE_TRACK_REQUEST.type, fetchRouteCoordinates);
  }
  
  export default function* mapSaga() {
    yield all([watchFetchRoute()]);
  }