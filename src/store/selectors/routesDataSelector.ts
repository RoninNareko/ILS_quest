import { RootState } from "../store";

export const routesDataSelector = (state: RootState) => state.map.routesData;