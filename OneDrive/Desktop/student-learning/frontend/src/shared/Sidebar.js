import { Link } from "react-router-dom";

function Sidebar(){
 return(
  <div className="sidebar">

   <h2>LMS Portal</h2>

   <Link to="/dashboard">🏠 Dashboard</Link>
   <Link to="/search">🔎 Search Learning</Link>
   <Link to="/videos">📺 My Videos</Link>
   <Link to="/">🚪 Logout</Link>

  </div>
 );
}
export default Sidebar;