import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";
import Interests from "./pages/Interests";
import SelectionTour from "./pages/SelectionTour";
import Register from "./pages/register/Register"
import Authorization from "./pages/autorization/Authorization";
import Lodging from "./pages/lodging/lodging";
function App() {
  return (
    <AppContext.Provider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Authorization />} />
          <Route path="Register" element={<Register />} />
          <Route path="Interests" element={<Interests />} />
          <Route path="SelectionTour" element={<SelectionTour />} />
          <Route path="Lodging" element={<Lodging />} />
          
        </Routes>
      </div>
    </AppContext.Provider>
  );
}


export default App;
