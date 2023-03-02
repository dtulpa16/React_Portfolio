import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
function App() {
  return (
    <div className="bg-green-600 h-screen text-white">
      <div className="w-3/4 m-auto">
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
