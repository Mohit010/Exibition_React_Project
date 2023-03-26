import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Food from "./Components/Food";
import Home from "./Components/Home";
import './script'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home"  element={<Home />}/>
        <Route path="/food" element={<Food />}/>
      </Routes>
    </Router>
  );
}

export default App;