import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";
import Interests from "./pages/Interests";
import SelectionTour from "./pages/SelectionTour";
import HomePage from "./pages/homepage/homePage.js";
import Register from "./pages/register/Register";
import Authorization from "./pages/autorization/Authorization.jsx";
import Constructor from "./pages/Constructor";
import MapConstructor from "./pages/MapConstructor";

function App() {
  const points = [
    { coordinates: [55.751574, 37.573856] }, // Москва
    { coordinates: [59.93863, 30.31413] }, // Санкт-Петербург
    { coordinates: [43.64992, 51.15834] }, // Казань
  ];
  return (
    <AppContext.Provider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Register" element={<Register />} />
          <Route path="Authorization" element={<Authorization />} />
          <Route path="Interests" element={<Interests />} />
          <Route path="SelectionTour" element={<SelectionTour />} />
          <Route path="Constructor" element={<Constructor />} />
          <Route
            path="MapConstructor"
            element={<MapConstructor points={points} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
