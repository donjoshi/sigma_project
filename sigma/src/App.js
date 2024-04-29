import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarMain from "./components/navbar-main/navbar-main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavbarMain />} />
      </Routes>
    </div>
  );
}

export default App;
