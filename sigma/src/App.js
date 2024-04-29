import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarMain from "./components/navbar-main/navbar-main";
import Home from "./pages/home/home";
import Page1 from "./pages/page1/page1";
import Navbar from "./components/navbar/navbar";
import Recruit from "./pages/recruit/recruit";
import Verification from "./pages/verification/verification";
import About from "./pages/about/about";
import Add_About from "./pages/add-about/add-about";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page1" element={<Page1/>} />
        <Route path="/recruit" element={<Recruit/>} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/add-about" element={<Add_About/>} />
        
      </Routes>
    </div>
  );
}

export default App;
