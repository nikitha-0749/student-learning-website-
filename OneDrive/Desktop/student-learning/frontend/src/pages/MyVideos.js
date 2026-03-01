import { useState, useEffect } from "react";
import Layout from "../components/Layout";

function MyVideos() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/videos")
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Layout>

      <h1>Saved Videos</h1>

      {videos.length === 0 && (
        <p>No saved videos yet.</p>
      )}

      {videos.map(video => (
        <div key={video.id} style={{ marginBottom: "30px" }}>
          <h3>{video.subject}</h3>
          <iframe
            width="100%"
            height="350"
            src={video.videoUrl}
            title="Saved video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      ))}

    </Layout>
  );
}

export default MyVideos;