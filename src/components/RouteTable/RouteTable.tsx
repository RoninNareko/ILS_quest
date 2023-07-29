import { useDispatch, useSelector } from "react-redux";
import { SELECT_ROUTE } from "../../store/reducers/mapReducer/mapReducer";
import { routesDataSelector } from "../../store/selectors/routesDataSelector";
import "./RouteTable.scss";

const RouteTable = () => {
  const dispatch = useDispatch();
  const routesData = useSelector(routesDataSelector);
  const selectRouteOnClickHandler = (routeNumber: number) => {
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
