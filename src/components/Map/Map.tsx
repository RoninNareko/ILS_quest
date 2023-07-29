import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import classNames from "classnames";
import styles from "./Map.module.scss";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import axios from "axios";
import RoutingMachine from "./RoutingMachine";

const position = [59.84660399, 30.29496392];

const routePoints = [
  { latitude: 59.84660399, longitude: 30.29496392 },
  { latitude: 59.82934196, longitude: 30.42423701 },
  { latitude: 59.83567701, longitude: 30.38064206 },
];

function Map() {
  const cx = classNames.bind(styles);
  const [route, setRoute] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // @ts-ignore
        const coordinatesString = routePoints
          .map((point) => `${point.latitude},${point.longitude}`)
          .join(";");

        const response = await axios.get(
          `http://router.project-osrm.org/route/v1/driving/${coordinatesString}?overview=false`
        );
        console.log("response", response.data.waypoints);

        const routeCoordinates = response.data.routes[0].geometry.coordinates;
        setRoute(routeCoordinates);
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };

    fetchData();
  }, []);
  console.log("route", route);
  const limeOptions = { color: "lime" };
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

        {/* {routePoints.map((point, index) => (
          <Marker position={[point.latitude, point.longitude]} key={index}>
            <Popup>{`Point ${index + 1}`}</Popup>
          </Marker>
        ))} */}
        {route && <Polyline pathOptions={limeOptions} positions={route} />}
        <RoutingMachine />
      </MapContainer>
    </section>
  );
}
export default Map;
