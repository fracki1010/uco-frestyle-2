import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import logo from "./assets/logo.jpg";
import { FooterUco } from "./components/Footer";
import { Home } from "./screens/Home";
import { Events } from "./screens/Events";

function App() {
  return (
    <>
      <Router>
      <Nav img={logo}></Nav>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
        </Routes>
      </Router>
      <footer className=" m-6 rounded-2xl">
        <FooterUco></FooterUco>
      </footer>
    </>
  );
}

export default App;
