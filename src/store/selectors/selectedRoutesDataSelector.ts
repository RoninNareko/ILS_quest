import { RootState } from "../store";

export const selectedRoutesDataSelector = (state: RootState) => state.map.selectedRoutesData;