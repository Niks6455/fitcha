import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";
import HomePage from "./pages/homepage/homePage"
import Register from "./pages/register/Register"
import Authorization from "./pages/autorization/Authorization";
function App() {
  return (
    <AppContext.Provider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Register" element={<Register />} />
          <Route path="Authorization" element={<Authorization />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
