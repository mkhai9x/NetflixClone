import "./App.css";
import Row from "./Components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
