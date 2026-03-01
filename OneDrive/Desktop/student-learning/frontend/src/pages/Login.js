import { useNavigate } from "react-router-dom";
import "../App.css";

function Login(){

 const nav=useNavigate();

 return(

 <div style={{display:"flex",height:"100vh"}}>

   {/* LEFT DESIGN */}
   <div style={{
     flex:1,
     background:"linear-gradient(120deg,#4e73df,#1cc88a)",
     color:"white",
     padding:"60px",
     display:"flex",
     flexDirection:"column",
     justifyContent:"center"
   }}>

     <h1 style={{fontSize:"42px"}}>Learn on your schedule</h1>
     <p>Anywhere, anytime. Start learning today.</p>

   </div>

   {/* RIGHT CARD */}
   <div style={{
     flex:1,
     display:"flex",
     alignItems:"center",
     justifyContent:"center",
     background:"#f4f6fb"
   }}>

     <div className="box" style={{width:"360px"}}>

       <h2>Student Login</h2>

       <input placeholder="Email"/>
       <input type="password" placeholder="Password"/>

       <button
         style={{width:"100%"}}
         onClick={()=>nav("/dashboard")}
       >
         Login
       </button>

     </div>

   </div>

 </div>

 );
}

export default Login;