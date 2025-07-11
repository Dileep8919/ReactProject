import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Men from "./components/Pages/Menfashion";
import Women from "./components/Pages/Womenfashion";
import Kids from "./components/Pages/Kidsfashion";
import Beauty from "./components/Pages/Beauty";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/men"} element={<Men />} />
          <Route path={"/women"} element={<Women />} />
          <Route path={"/kids"} element={<Kids />} />
          <Route path="/" element={<Home />} />
          <Route path={"/beauty"} element={<Beauty />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
