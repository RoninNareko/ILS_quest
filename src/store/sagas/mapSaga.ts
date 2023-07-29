import axios from 'axios';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { ROUTE_TRACK_REQUEST, ROUTE_TRACK_REQUEST_ERROR, SET_ROUTE_TRACK } from '../reducers/mapReducer/mapReducer';

function* fetchRouteCoordinates(action:any):any {
    
    const { points } = action.payload;
    
    try {
      const coordinatesString = points
        .map((point:any) => `${point.latitude},${point.longitude}`)
        .join(";");
        
    
      const response = yield call(axios.get, `http://router.project-osrm.org/route/v1/driving/${coordinatesString}?overview=false`);
      const routeCoordinates = response.data.waypoints.map((el:any)=>el.location);
    
      yield put({ type: SET_ROUTE_TRACK, payload: routeCoordinates });
    } catch (error) {
        // @ts-ignore
      yield put({ type: ROUTE_TRACK_REQUEST_ERROR, payload: error.message });
    }
  }
  function* watchFetchRoute() {
    yield takeLatest(ROUTE_TRACK_REQUEST, fetchRouteCoordinates);
  }
  
  export default function* mapSaga() {
    yield all([watchFetchRoute()]);
  }