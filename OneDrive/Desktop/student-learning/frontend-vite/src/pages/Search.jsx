import Layout from "../components/Layout";
import { useState } from "react";

function Search() {

  const [query,setQuery] = useState("");
  const [videos,setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] = useState("");
  const [notes,setNotes] = useState("");

  async function searchVideos(){

    if(query.trim()===""){
      alert("Enter topic");
      return;
    }

    const res = await fetch(
      `http://localhost:8080/api/search?subject=${query}`
    );

    const data = await res.json();

    // ADDED WARNING CHECK
    if(data.error){
      alert(data.error);
      return;
    }

    setVideos(data.videos);
    setNotes(data.notes);

  }

  function playVideo(url){
    setSelectedVideo(url);
  }

  function saveVideo(video){

    let saved = JSON.parse(localStorage.getItem("savedVideos")) || [];

    const alreadySaved = saved.find(v => v.url === video.url);

    if(alreadySaved){
      alert("Video already saved");
      return;
    }

    saved.push(video);

    localStorage.setItem("savedVideos", JSON.stringify(saved));

    alert("Video saved!");
  }

  return(

    <Layout>

      <h1>Search Learning</h1>

      <input
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Search subject..."
        style={searchInput}
      />

      <button onClick={searchVideos} style={searchBtn}>
        Search
      </button>

      {selectedVideo && (

        <div style={{marginTop:"30px"}}>

          <iframe
            width="720"
            height="400"
            src={selectedVideo}
            title="video"
            allowFullScreen
          />

        </div>

      )}

      <div style={videoGrid}>

        {videos.map((v,index)=>(

          <div key={index} style={videoCard}>

            <img
              src={v.thumbnail}
              style={thumb}
              onClick={()=>playVideo(v.url)}
            />

            <p>{v.title}</p>

            <button
              style={saveBtn}
              onClick={()=>saveVideo(v)}
            >
              Save Video
            </button>

          </div>

        ))}

      </div>

      {notes && (

        <div style={{marginTop:"40px"}}>

          <h2>Study Notes</h2>

          <a href={notes} target="_blank">
            Open Notes
          </a>

        </div>

      )}

    </Layout>

  );

}

const searchInput={
  padding:"10px",
  width:"300px",
  marginRight:"10px"
};

const searchBtn={
  padding:"10px 20px",
  cursor:"pointer"
};

const videoGrid={
  display:"grid",
  gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",
  gap:"20px",
  marginTop:"30px"
};

const videoCard={
  background:"#f3f3f3",
  padding:"10px",
  borderRadius:"8px"
};

const thumb={
  width:"100%",
  borderRadius:"6px",
  cursor:"pointer"
};

const saveBtn={
  marginTop:"10px",
  padding:"6px 10px",
  background:"#4f6bdc",
  color:"white",
  border:"none",
  borderRadius:"5px",
  cursor:"pointer"
};

export default Search;