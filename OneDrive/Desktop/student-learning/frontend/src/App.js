import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { GameProvider } from "./context/GameContext";
import MyVideos from "./pages/MyVideos";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import VisionBoard from "./pages/VisionBoard";

function App() {
  return (
    <ThemeProvider>
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/videos" element={<MyVideos />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/vision" element={<VisionBoard />} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </ThemeProvider>
  );
}

export default App;