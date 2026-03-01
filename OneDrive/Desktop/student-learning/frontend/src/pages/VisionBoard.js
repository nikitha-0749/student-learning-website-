import { useState } from "react";

function VisionBoard() {
  const [goal, setGoal] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <div style={{ padding: "30px" }}>
      <h2>Vision Board</h2>

      <textarea
        placeholder="Write your learning goal..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{ width: "100%", height: "100px" }}
      />

      <br /><br />

      <label>Start Date:</label>
      <input type="date" onChange={(e)=>setStart(e.target.value)} />

      <br /><br />

      <label>End Date:</label>
      <input type="date" onChange={(e)=>setEnd(e.target.value)} />

      <br /><br />

      <h3>Your Goal:</h3>
      <p>{goal}</p>
      <p>{start} → {end}</p>
    </div>
  );
}

export default VisionBoard;