import Layout from "../components/Layout";
import { useState, useEffect } from "react";

function VisionBoard() {

  const [goal,setGoal] = useState("");
  const [startDate,setStartDate] = useState("");
  const [endDate,setEndDate] = useState("");

  const [goals,setGoals] = useState([]);
  const [editId,setEditId] = useState(null);

  // Load saved goals
  useEffect(()=>{

    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];

    setGoals(savedGoals);

  },[]);

  // Save goals
  useEffect(()=>{

    localStorage.setItem("goals",JSON.stringify(goals));

  },[goals]);


  function addGoal(){

    if(goal.trim()===""){
      alert("Enter a goal");
      return;
    }

    if(editId){

      const updated = goals.map(g =>
        g.id === editId
        ? {...g,goal,startDate,endDate}
        : g
      );

      setGoals(updated);
      setEditId(null);

    } else {

      const newGoal = {
        id: Date.now(),
        goal,
        startDate,
        endDate
      };

      setGoals([...goals,newGoal]);
    }

    setGoal("");
    setStartDate("");
    setEndDate("");
  }


  function deleteGoal(id){

    const updated = goals.filter(g => g.id !== id);

    setGoals(updated);
  }


  function editGoal(g){

    setGoal(g.goal);
    setStartDate(g.startDate);
    setEndDate(g.endDate);

    setEditId(g.id);

  }


  return(

    <Layout>

      <h1>Vision Board</h1>

      <div style={formCard}>

        <textarea
          placeholder="Write your learning goal..."
          value={goal}
          onChange={(e)=>setGoal(e.target.value)}
          style={textarea}
        />

        <div style={row}>

          <div>
            <label>Start Date</label>
            <br/>
            <input
              type="date"
              value={startDate}
              onChange={(e)=>setStartDate(e.target.value)}
              style={input}
            />
          </div>

          <div>
            <label>End Date</label>
            <br/>
            <input
              type="date"
              value={endDate}
              onChange={(e)=>setEndDate(e.target.value)}
              style={input}
            />
          </div>

        </div>

        <button style={addBtn} onClick={addGoal}>
          {editId ? "Update Goal" : "Add Goal"}
        </button>

      </div>


      <h2 style={{marginTop:"40px"}}>Your Goals</h2>

      <div style={grid}>

        {goals.map((g)=>(
          <div key={g.id} style={card}>

            <p><b>Goal:</b> {g.goal}</p>
            <p><b>Start:</b> {g.startDate}</p>
            <p><b>End:</b> {g.endDate}</p>

            <div style={{marginTop:"10px"}}>

              <button
                style={editBtn}
                onClick={()=>editGoal(g)}
              >
                Edit
              </button>

              <button
                style={deleteBtn}
                onClick={()=>deleteGoal(g.id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </Layout>

  );

}


const formCard = {
  background:"#0f172a",
  padding:"20px",
  borderRadius:"10px",
  color:"white",
  maxWidth:"800px"
};

const textarea = {
  width:"100%",
  height:"80px",
  marginBottom:"20px",
  padding:"10px",
  borderRadius:"5px"
};

const row = {
  display:"flex",
  gap:"20px",
  marginBottom:"20px"
};

const input = {
  padding:"8px",
  borderRadius:"5px"
};

const addBtn = {
  padding:"10px 20px",
  background:"#6366f1",
  border:"none",
  color:"white",
  borderRadius:"6px",
  cursor:"pointer"
};

const grid = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
  gap:"20px",
  marginTop:"20px"
};

const card = {
  background:"white",
  padding:"15px",
  borderRadius:"10px",
  boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
};

const editBtn = {
  marginRight:"10px",
  padding:"6px 12px",
  background:"#22c55e",
  border:"none",
  color:"white",
  borderRadius:"5px",
  cursor:"pointer"
};

const deleteBtn = {
  padding:"6px 12px",
  background:"#ef4444",
  border:"none",
  color:"white",
  borderRadius:"5px",
  cursor:"pointer"
};

export default VisionBoard;