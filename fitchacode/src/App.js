import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";
import Interests from "./pages/Interests";
import SelectionTour from "./pages/SelectionTour";
import HomePage from "./pages/homepage/homePage";
import Register from "./pages/register/Register";
import Authorization from "./pages/autorization/Authorization";
import Lodging from "./pages/lodging/lodging";
import Active from "./pages/active/active";
import img1 from "./images/1.svg";
import img2 from "./images/3.svg";
import img3 from "./images/4.svg";
import cafe1 from "./images/pakoke.svg";
import cafe2 from "./images/jbr.svg";
import cafe3 from "./images/demon.svg";
import Eade from "./pages/eade/eade";
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
    <AppContext.Provider value={{ img1, img2, img3, cafe1, cafe2, cafe3 }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Register" element={<Register />} />
          <Route path="Interests" element={<Interests />} />
          <Route path="SelectionTour" element={<SelectionTour />} />
          <Route path="Lodging" element={<Lodging />} />
          <Route path="Active" element={<Active />} />
          <Route path="Eade" element={<Eade />} />
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
