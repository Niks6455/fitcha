import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";

function App() {
  return (
    <AppContext.Provider>
      <div className="App">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="Register" element={<div>Registerлол</div>} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
