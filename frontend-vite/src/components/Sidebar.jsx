import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={sidebar}>
      <h2 style={{ marginBottom: "40px" }}>EduPortal</h2>
      
      <Link style={link} to="/dashboard">🏠 Dashboard</Link>
      <Link style={link} to="/search">🔎 Search Learning</Link>
      <Link style={link} to="/videos">📺 Saved Videos</Link>
      <Link style={link} to="/vision">🎯 Vision Board</Link>
      <Link style={link} to="/diary">📓 Diary / Notes</Link>
      <Link style={link} to="/timer">⏱ Study Timer</Link>
      <Link style={link} to="/logout">🚪 Logout</Link>
    </div>
  );
}

const sidebar = {
  width: "240px",
  height: "100vh",
  position: "fixed",
  left: 0,
  top: 0,
  background: "linear-gradient(180deg,#4f6bdc,#2bb6a8)",
  color: "white",
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  boxSizing: "border-box"
};

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px"
};

export default Sidebar;