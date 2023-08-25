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
import cafe1 from "./images/pakoke.svg"
import cafe2 from "./images/jbr.svg"
import cafe3 from "./images/demon.svg"
import Eade from "./pages/eade/eade";

function App() {
  return (
    <AppContext.Provider value={{img1, img2, img3, cafe1, cafe2, cafe3}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Register" element={<Register />} />
          <Route path="Interests" element={<Interests />} />
          <Route path="SelectionTour" element={<SelectionTour />} />
          <Route path="Lodging" element={<Lodging />} />
          <Route path="Active" element={<Active />} />
          <Route path="Eade" element={<Eade />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
