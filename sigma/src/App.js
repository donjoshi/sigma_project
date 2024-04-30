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
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
      <Routes>
        <Route path="/" element={<Home />} />
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
