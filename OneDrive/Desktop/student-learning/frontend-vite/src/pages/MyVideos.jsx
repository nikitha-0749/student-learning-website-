import Layout from "../components/Layout";
import { useState,useEffect } from "react";

function MyVideos(){

  const [videos,setVideos] = useState([]);

  useEffect(()=>{

    const saved = JSON.parse(localStorage.getItem("savedVideos")) || [];

    setVideos(saved);

  },[]);

  function deleteVideo(url){

    const updated = videos.filter(v => v.url !== url);

    setVideos(updated);

    localStorage.setItem("savedVideos",JSON.stringify(updated));

  }

  return(

    <Layout>

      <h1>Saved Videos</h1>

      <div style={videoGrid}>

        {videos.map((v,index)=>(

          <div key={index} style={videoCard}>

            <iframe
              width="300"
              height="200"
              src={v.url}
              title="video"
              allowFullScreen
            />

            <p>{v.title}</p>

            <button
              style={deleteBtn}
              onClick={()=>deleteVideo(v.url)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </Layout>

  )

}

const videoGrid={
  display:"grid",
  gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
  gap:"20px",
  marginTop:"30px"
};

const videoCard={
  background:"#f3f3f3",
  padding:"10px",
  borderRadius:"8px"
};

const deleteBtn={
  marginTop:"10px",
  padding:"6px 10px",
  background:"red",
  color:"white",
  border:"none",
  borderRadius:"5px",
  cursor:"pointer"
};

export default MyVideos;