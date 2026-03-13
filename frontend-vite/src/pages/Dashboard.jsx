import Layout from "../components/Layout"
import "./Dashboard.css"

function Dashboard(){

return(

<Layout>

<h1 className="dashboard-title">Student Dashboard</h1>

<div className="dashboard-grid">

<div className="progress-card">
<div className="circle">10%</div>
<p>Progress</p>
</div>

<div className="card purple">
<h3>XP Points</h3>
<h2>10</h2>
</div>

<div className="card pink">
<h3>Learning Streak</h3>
<h2>🔥 1</h2>
</div>

<div className="card green">
<h3>Study Hours</h3>
<h2>1 hrs</h2>
</div>

</div>

</Layout>

)

}

export default Dashboard