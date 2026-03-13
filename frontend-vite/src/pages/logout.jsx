import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(){

  const navigate = useNavigate();

  useEffect(()=>{

    // clear user session
    localStorage.removeItem("user");

    // redirect to login page
    navigate("/");

  },[]);

  return(
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h2>✅ Logging out...</h2>
      <p>Please wait...</p>
    </div>
  )

}

export default Logout