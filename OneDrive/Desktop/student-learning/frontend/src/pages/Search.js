import React, { useState, useContext } from "react";
import Layout from "../components/Layout";
import { GameContext } from "../context/GameContext";

function Search() {

  const [subject, setSubject] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [notes, setNotes] = useState("");

  const { addXP, increaseStreak, addHour } = useContext(GameContext);

  const search = async () => {
    if (!subject) return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/search?subject=${subject}`
      );

      const data = await response.json();

      setVideoUrl(data.videoUrl);

      addXP(10);
      increaseStreak();
      addHour();

      if (data.notesApi) {
        const notesResponse = await fetch(data.notesApi);
        const notesData = await notesResponse.json();
        setNotes(notesData.extract || "No notes available.");
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Layout>

      <h1>Search Learning</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter subject (e.g. Machine Learning)"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ width: "60%", marginRight: "10px" }}
        />

        <button onClick={search}>
          Search
        </button>
      </div>

      {videoUrl && (
        <div style={{ marginTop: "20px" }}>
          <h3>Video</h3>
          <iframe
            width="100%"
            height="400"
            src={videoUrl}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {notes && (
        <div style={{ marginTop: "30px" }}>
          <h3>Notes</h3>
          <p>{notes}</p>
        </div>
      )}

    </Layout>
  );
}

export default Search;