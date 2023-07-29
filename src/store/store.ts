import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from 'redux-saga'
import reducer from "./reducers/rootReducer";
import mapSaga from "./sagas/mapSaga";

const sagaMiddleware = createSagaMiddleware();

const preloadedState = {};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk:false,
    }).concat(sagaMiddleware),
  preloadedState,
});

sagaMiddleware.run(mapSaga)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => console.info(store.getState()));

export default store;