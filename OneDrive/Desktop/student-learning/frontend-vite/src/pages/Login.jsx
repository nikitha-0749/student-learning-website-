import { useNavigate } from "react-router-dom";
import "./login.css";

function Login(){

const navigate = useNavigate();

function handleLogin(){
navigate("/dashboard");
}

return(

<div className="login-container">

<div className="login-left">
<h1>Learn on your schedule</h1>
<p>Anywhere, anytime. Start learning today.</p>
</div>

<div className="login-right">

<h2>Student Login</h2>

<input placeholder="Enter Email"/>
<input placeholder="Enter Password" type="password"/>

<button onClick={handleLogin}>
Login
</button>

</div>

</div>

)

}

export default Login;