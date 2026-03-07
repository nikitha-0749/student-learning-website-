import { useNavigate } from "react-router-dom";
import { useState } from "react";

function StudentDetails(){

 const nav=useNavigate();

 const [name,setName]=useState("");
 const [branch,setBranch]=useState("");
 const [year,setYear]=useState("");

 return(

  <div className="center">

    <div className="card">

      <h2>Student Details</h2>

      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
      <input placeholder="Branch" value={branch} onChange={e=>setBranch(e.target.value)}/>
      <input placeholder="Year" value={year} onChange={e=>setYear(e.target.value)}/>

      <button onClick={()=>nav("/dashboard")}>
        Continue
      </button>

    </div>

  </div>

 );
}

export default StudentDetails;