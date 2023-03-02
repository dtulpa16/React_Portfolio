import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import BGImage from "./assets/Background-img.png"
function App() {
  return (
    <div className={`bg-[url(./assets/Background-img.png)] bg-cover bg-center h-screen text-white overflow-auto`}>
      <div className="w-5/6 m-auto">
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
