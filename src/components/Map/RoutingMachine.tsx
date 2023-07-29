import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

const createRoutineMachineLayer = (props: any) => {
  const { currentRouteTrack } = props;
  console.log("createRoutineMachineLayer", props);

  const waypoints = currentRouteTrack.map((coordinates: number[]) =>
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
