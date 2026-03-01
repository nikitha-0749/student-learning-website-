import Layout from "../components/Layout";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Dashboard() {

  const { xp, streak, hours } = useContext(GameContext);

  const progress = Math.min((xp % 100), 100);

  return (
    <Layout>

      <h1>Student Dashboard</h1>

      <div style={{
        display: "flex",
        gap: "40px",
        flexWrap: "wrap"
      }}>

        <div style={{ width: 150 }}>
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              pathColor: "#6C63FF"
            })}
          />
          <p style={{ textAlign: "center" }}>Progress</p>
        </div>

        <Card title="XP Points" value={xp} color="#6C63FF" />
        <Card title="Learning Streak" value={`${streak} 🔥`} color="#FF6584" />
        <Card title="Study Hours" value={`${hours} hrs`} color="#00C9A7" />

      </div>

    </Layout>
  );
}

function Card({ title, value, color }) {
  return (
    <div style={{
      background: color,
      color: "white",
      padding: "20px",
      borderRadius: "15px",
      minWidth: "150px"
    }}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default Dashboard;