import { useDispatch, useSelector } from "react-redux";
import { SELECT_ROUTE } from "../../store/reducers/mapReducer/mapReducer";
import { routesDataSelector } from "../../store/selectors/routesDataSelector";
import { selectedRoutesDataSelector } from "../../store/selectors/selectedRoutesDataSelector";
import styles from "./RouteTable.module.scss";
import classNames from "classnames";
import { active_color, passive_color } from "./RouteTable-constants";

const RouteTable = () => {
  const cx = classNames.bind(styles);

  const dispatch = useDispatch();

  const routesData = useSelector(routesDataSelector);
  const selectedRoutesData = useSelector(selectedRoutesDataSelector);

  const selectRouteOnClickHandler = (routeNumber: number) => {
    dispatch(SELECT_ROUTE(routeNumber));
  };

  return (
    <div className={cx(styles.table_container)}>
      <table className={cx(styles.table)}>
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
              <td
                onClick={() => selectRouteOnClickHandler(route.routeNumber)}
                className={cx(styles.pointer)}
                style={{
                  backgroundColor:
                    selectedRoutesData &&
                    // @ts-ignore
                    selectedRoutesData.routeNumber === route.routeNumber
                      ? active_color
                      : passive_color,
                }}
              >
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
