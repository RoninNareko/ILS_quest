import Map from "./components/Map/Map";
import RouteTable from "./components/RouteTable/RouteTable";

import "./App.css";

function App() {
  return (
    <div className="App">
      <RouteTable />
      <section>
        <Map />
      </section>
    </div>
  );
}

export default App;
