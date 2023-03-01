import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
function App() {
  return (
    <div className="bg-green-500 h-screen text-white">
      <div class="w-3/5 m-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/my-projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
