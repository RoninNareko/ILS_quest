import { MapContainer, TileLayer } from "react-leaflet";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import RoutingMachine from "./RoutingMachine";
import { useDispatch, useSelector } from "react-redux";
import { currentRouteTrackSelector } from "../../store/selectors/currentRouteTrackSelector";
import { selectedRoutesDataSelector } from "../../store/selectors/selectedRoutesDataSelector";
import { ROUTE_TRACK_REQUEST } from "../../store/reducers/mapReducer/mapReducer";

import styles from "./Map.module.scss";
import { TileLayer_attribution, TileLayer_url } from "./Map-constants";
import "leaflet/dist/leaflet.css";

function Map() {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();

  const rMachine = useRef();

  const currentRouteTrack = useSelector(currentRouteTrackSelector);
  const selectedRoutesData = useSelector(selectedRoutesDataSelector);

  useEffect(() => {
    if (rMachine.current) {
      // @ts-ignore
      rMachine.current.setWaypoints(currentRouteTrack);
    }
  }, [currentRouteTrack, rMachine]);

  useEffect(() => {
    if (selectedRoutesData) {
      dispatch(ROUTE_TRACK_REQUEST(selectedRoutesData));
    }
  }, [selectedRoutesData, dispatch]);

  return (
    <section className={cx(styles.map_container)}>
      <MapContainer
        className={cx(styles.leaflet_container)}
        // @ts-ignore
        center={[51.505, -0.09]}
        zoom={130}
      >
        <TileLayer attribution={TileLayer_attribution} url={TileLayer_url} />

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
