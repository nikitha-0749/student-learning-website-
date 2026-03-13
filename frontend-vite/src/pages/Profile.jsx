import Sidebar from "../shared/Sidebar";

function Profile(){

 return(
  <div className="layout">

   <Sidebar/>

   <div className="content">

     <h1>Profile</h1>

     <div className="box">Name: Student</div>
     <div className="box">Email: student@mail.com</div>
     <div className="box">Courses Enrolled: 3</div>
     <div className="box">Hours Learned: 25</div>

   </div>
  </div>
 );
}

export default Profile;