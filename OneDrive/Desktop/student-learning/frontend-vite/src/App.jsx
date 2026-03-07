import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import MyVideos from "./pages/MyVideos";
import VisionBoard from "./pages/VisionBoard";
import Diary from "./pages/Diary";
import StudyTimerPage from "./pages/StudyTimerPage";
import Login from "./pages/Login";
import Logout from "./pages/logout"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/videos" element={<MyVideos />} />
        <Route path="/vision" element={<VisionBoard />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/timer" element={<StudyTimerPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;