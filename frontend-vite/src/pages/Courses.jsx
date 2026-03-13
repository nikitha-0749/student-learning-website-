import Sidebar from "../shared/Sidebar";

function Courses(){

 return(
  <div className="layout">

    <Sidebar/>

    <div className="content">

      <h1>My Courses</h1>

      <div className="box">Java Course — Progress 40%</div>
      <div className="box">Python Course — Progress 70%</div>
      <div className="box">DBMS Course — Progress 20%</div>

    </div>

  </div>
 );
}

export default Courses;