import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";
import Interests from "./pages/Interests";
import SelectionTour from "./pages/SelectionTour";
import HomePage from "./pages/homepage/homePage.js";
import Register from "./pages/register/Register";
import Authorization from "./pages/autorization/Authorization.jsx";
import Constructor from "./pages/Constructor";

function App() {
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
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
