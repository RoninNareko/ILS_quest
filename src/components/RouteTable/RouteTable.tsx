import React from "react";
import "./RouteTable.scss";

const routesData = [
  {
    routeNumber: "Маршрут №1",
    points: [
      { latitude: 59.84660399, longitude: 30.29496392 },
      { latitude: 59.82934196, longitude: 30.42423701 },
      { latitude: 59.83567701, longitude: 30.38064206 },
    ],
  },
  {
    routeNumber: "Маршрут №2",
    points: [
      { latitude: 59.82934196, longitude: 30.42423701 },
      { latitude: 59.82761295, longitude: 30.41705607 },
      { latitude: 59.84660399, longitude: 30.29496392 },
    ],
  },
  {
    routeNumber: "Маршрут №3",
    points: [
      { latitude: 59.83567701, longitude: 30.38064206 },
      { latitude: 59.84660399, longitude: 30.29496392 },
      { latitude: 59.82761295, longitude: 30.41705607 },
    ],
  },
];

const RouteTable = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Маршрут</th>
            <th>Точка маршрута №1</th>
            <th>Точка маршрута №2</th>
            <th>Точка маршрута №3</th>
          </tr>
        </thead>
        <tbody>
          {routesData.map((route, index) => (
            <tr key={index}>
              <td>{route.routeNumber}</td>
              {route.points.map((point, index) => (
                <td key={index}>
                  <span>{point.latitude},</span>
                  <br />
                  <span>{point.longitude}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default RouteTable;
