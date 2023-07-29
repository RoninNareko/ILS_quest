import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import { Coordinate } from "../../store/reducers/mapReducer/mapReducer-types";
import "leaflet-routing-machine";
import { iconUrl } from "./Map-constants";

L.Marker.prototype.options.icon = L.icon({
  iconUrl,
});
// @ts-ignore
const createRoutineMachineLayer = (props) => {
  const { currentRouteTrack } = props;

  const waypoints = currentRouteTrack.map((coordinates: Coordinate) =>
    L.latLng(coordinates[0], coordinates[1])
  );

  const instance = L.Routing.control({
    waypoints,
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
