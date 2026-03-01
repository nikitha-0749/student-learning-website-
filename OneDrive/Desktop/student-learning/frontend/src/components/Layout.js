import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Layout({ children }) {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <div style={{
        width: "240px",
        background: "linear-gradient(180deg, #4e73df, #1cc88a)",
        color: "white",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        boxShadow: "2px 0 15px rgba(0,0,0,0.15)"
      }}>

        <h2 style={{ marginBottom: "20px" }}>EduPortal</h2>

        <NavLink to="/dashboard">🏠 Dashboard</NavLink>
        <NavLink to="/search">🔎 Search Learning</NavLink>
        <NavLink to="/videos">📺 Saved Videos</NavLink>
        <NavLink to="/vision">🎯 Vision Board</NavLink>
        <NavLink to="/">🚪 Logout</NavLink>

      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: "30px",
        transition: "all 0.3s ease"
      }}>

        {/* Top Bar */}
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px"
        }}>
          <button
            onClick={toggleTheme}
            style={{
              background: "#6C63FF",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            🌙 Toggle Dark / Light
          </button>
        </div>

        {children}

      </div>

    </div>
  );
}

/* Reusable Nav Link Component */
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "16px",
        padding: "10px",
        borderRadius: "8px",
        transition: "0.3s"
      }}
      onMouseOver={e => e.target.style.background = "#ffffff33"}
      onMouseOut={e => e.target.style.background = "transparent"}
    >
      {children}
    </Link>
  );
}

export default Layout;