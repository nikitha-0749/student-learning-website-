import Layout from "../components/Layout";
import { useState, useEffect } from "react";

function Diary() {

  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("diaryNotes")) || [];
    setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("diaryNotes", JSON.stringify(notes));
  }, [notes]);

  function handleImage(e) {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function addNote() {

    if (text.trim() === "") {
      alert("Write something first");
      return;
    }

    if (editId) {

      const updated = notes.map(n =>
        n.id === editId
          ? { ...n, text, image }
          : n
      );

      setNotes(updated);
      setEditId(null);

    } else {

      const newNote = {
        id: Date.now(),
        text: text,
        image: image
      };

      setNotes([...notes, newNote]);
    }

    setText("");
    setImage("");
  }

  function deleteNote(id) {

    const updated = notes.filter(n => n.id !== id);
    setNotes(updated);
  }

  function editNote(n) {

    setText(n.text);
    setImage(n.image);
    setEditId(n.id);
  }

  return (

    <Layout>

      <div style={page}>

        <h1>My Diary / Notes</h1>

        <textarea
          placeholder="Write your thoughts..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={textarea}
        />

        <br />

        <input type="file" accept="image/*" onChange={handleImage} />

        <br /><br />

        <button style={addBtn} onClick={addNote}>
          {editId ? "Update Note" : "Add Note"}
        </button>

        <div style={grid}>

          {notes.map((n) => (

            <div key={n.id} style={card}>

              <p>{n.text}</p>

              {n.image && (
                <img src={n.image} style={img} alt="note"/>
              )}

              <div style={{ marginTop: "10px" }}>

                <button
                  style={editBtn}
                  onClick={() => editNote(n)}
                >
                  Edit
                </button>

                <button
                  style={deleteBtn}
                  onClick={() => deleteNote(n.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Layout>

  );
}

const page = {
  minHeight: "100vh",
  padding: "20px"
};

const textarea = {
  width: "100%",
  height: "100px",
  padding: "10px",
  borderRadius: "6px"
};

const addBtn = {
  padding: "8px 16px",
  background: "#4f6bdc",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  background: "#1e1e1e",
  padding: "15px",
  borderRadius: "8px",
  color: "white"
};

const img = {
  width: "100%",
  marginTop: "10px",
  borderRadius: "6px"
};

const editBtn = {
  marginRight: "10px",
  background: "#22c55e",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "5px",
  cursor: "pointer"
};

const deleteBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Diary;