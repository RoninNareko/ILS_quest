import { RootState } from "../store";

export const currentRouteTrackSelector = (state: RootState) => state.map.currentRouteTrackData;