import "./App.css";
import Map from "./components/Map/Map";
import RouteTable from "./components/RouteTable/RouteTable";

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
