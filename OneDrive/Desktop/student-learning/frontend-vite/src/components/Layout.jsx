import Sidebar from "./Sidebar";
import { useState } from "react";

function Layout({ children }) {

  const [mode,setMode] = useState("light");

  const pageStyle = {
    backgroundColor: mode === "dark" ? "#0f172a" : "#f4f4f4",
    color: mode === "dark" ? "white" : "black",
    minHeight: "100vh",
    padding: "40px",
    marginLeft: "240px",
    width: "100%"
  };

  return (
    <div style={{display:"flex"}}>

      <Sidebar />

      <div style={pageStyle}>

        <div style={topBar}>

          <button
            style={darkBtn}
            onClick={()=>setMode("dark")}
          >
            🌙 Dark
          </button>

          <button
            style={lightBtn}
            onClick={()=>setMode("light")}
          >
            ☀ Light
          </button>

        </div>

        {children}

      </div>

    </div>
  );
}

const topBar = {
  display:"flex",
  justifyContent:"flex-end",
  gap:"10px",
  marginBottom:"20px"
};

const darkBtn = {
  padding:"8px 16px",
  background:"#4f6bdc",
  color:"white",
  border:"none",
  borderRadius:"6px",
  cursor:"pointer"
};

const lightBtn = {
  padding:"8px 16px",
  background:"#22c55e",
  color:"white",
  border:"none",
  borderRadius:"6px",
  cursor:"pointer"
};

export default Layout;