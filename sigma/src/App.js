import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarMain from "./components/navbar-main/navbar-main";
import Home from "./pages/home/home";
import Page1 from "./pages/page1/page1";
import Navbar from "./components/navbar/navbar";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page1" element={<Page1/>} />
        
      </Routes>
    </div>
  );
}

export default App;
