import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import classNames from "classnames";
import styles from "./Map.module.scss";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import RoutingMachine from "./RoutingMachine";
import { useDispatch, useSelector } from "react-redux";
import { currentRouteTrackSelector } from "../../store/selectors/currentRouteTrackSelector";
import { routesDataSelector } from "../../store/selectors/routesDataSelector";
import { selectedRoutesDataSelector } from "../../store/selectors/selectedRoutesDataSelector";
import { ROUTE_TRACK_REQUEST } from "../../store/reducers/mapReducer/mapReducer";

const position = [59.84660399, 30.29496392];

function Map() {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const rMachine = useRef();
  // const [route, setRoute] = useState([]);
  const currentRouteTrack = useSelector(currentRouteTrackSelector);
  // const routesData = useSelector(routesDataSelector);
  const selectedRoutesData = useSelector(selectedRoutesDataSelector);
  useEffect(() => {
    if (rMachine.current) {
      console.log(rMachine.current);
      // @ts-ignore
      rMachine.current.setWaypoints(currentRouteTrack);
    }
  }, [currentRouteTrack, rMachine]);
  // console.log("currentRouteTrack", currentRouteTrack);
  useEffect(() => {
    if (selectedRoutesData) {
      dispatch(ROUTE_TRACK_REQUEST(selectedRoutesData));
    }
  }, [selectedRoutesData, dispatch]);

  useEffect(() => {}, [currentRouteTrack]);

  return (
    <section className={cx(styles.map_container)}>
      <MapContainer
        className={cx(styles.leaflet_container)}
        // @ts-ignore
        center={position}
        zoom={130}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {currentRouteTrack.length > 0 && (
          <RoutingMachine
            // @ts-ignore
            ref={rMachine}
            currentRouteTrack={currentRouteTrack}
          />
        )}
      </MapContainer>
    </section>
  );
}
export default Map;
