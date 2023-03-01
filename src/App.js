import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="bg-hsl(146, 64%, 61%)">
      <div class="w-3/4">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
