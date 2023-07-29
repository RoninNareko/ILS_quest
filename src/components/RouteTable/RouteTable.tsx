import "./RouteTable.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { SELECT_ROUTE } from "../../store/reducers/mapReducer/mapReducer";

const RouteTable = () => {
  const dispatch = useDispatch();
  const routesData = useSelector((state: RootState) => state.map.routesData);
  const selectRouteOnClickHandler = (routeNumber: number) => {
    console.log("hahahha", routeNumber);

    dispatch(SELECT_ROUTE(routeNumber));
  };
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Маршрут</th>
            {routesData.map(({ routeNumber }, index) => (
              <th key={index}>Маршрут № {routeNumber}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {routesData.map((route, index) => (
            <tr key={index}>
              <td onClick={() => selectRouteOnClickHandler(route.routeNumber)}>
                Маршрут № {route.routeNumber}
              </td>
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
