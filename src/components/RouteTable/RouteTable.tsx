import "./RouteTable.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const RouteTable = () => {
  const routesData = useSelector((state: RootState) => state.map.routesData);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Маршрут</th>
            {routesData.map(({ routeNumber }, index) => (
              <th key={index}>{routeNumber}</th>
            ))}
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
