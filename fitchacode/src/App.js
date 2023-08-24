import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";
import Interests from "./pages/Interests/Interests";

function App() {
  return (
    <AppContext.Provider>
      <div className="App">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="Register" element={<div>Registerлол</div>} />
          <Route path="Interests" element={<Interests />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
