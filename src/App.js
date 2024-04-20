import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://voluble-entremet-baa96d.netlify.app/">Syaibatul </a>
          and is{" "}
          <a href="https://github.com/shizop/my-weather-react">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
