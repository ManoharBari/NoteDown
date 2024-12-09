import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:8080"
  const intialNotes = []
  const [notes, setNotes] = useState(intialNotes);

  // Fetch All Notes
  const fetchAllNote = async () => {
    // API call
    const url = `${host}/notes/fetchallnotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NDUwMjliZjQ0NjA1ODhhNzVhYmJkIiwibmFtZSI6InNoeWFtIn0sImlhdCI6MTczMjU5NzUwOX0.xIQ8sXHY4kelP8ZqQC8LPPQ_iajzYmXBBlwYEpnLIzM"
      }
    });
    const json = await response.json();
    setNotes(json)
  }

  // Add Notes
  const addNote = async (title, description, tag) => {
    // API call
    const url = `${host}/notes/createnote`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NDUwMjliZjQ0NjA1ODhhNzVhYmJkIiwibmFtZSI6InNoeWFtIn0sImlhdCI6MTczMjU5NzUwOX0.xIQ8sXHY4kelP8ZqQC8LPPQ_iajzYmXBBlwYEpnLIzM"
      },
      body: JSON.stringify({ title, description, tag }),
    });

    //client side logic
    const note = {
      "user": "67445029bf4460588a75abbd",
      "title": title,
      "description": description,
      "tag": tag,
      "_id": "675839a4ca2d737c1f7b2570",
      "date": "2024-12-10T12:52:52.138Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }

  //Update Notes
  const updateNote = async (id, title, description, tag) => {

    // API call
    const url = `${host}/notes/updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NDUwMjliZjQ0NjA1ODhhNzVhYmJkIiwibmFtZSI6InNoeWFtIn0sImlhdCI6MTczMjU5NzUwOX0.xIQ8sXHY4kelP8ZqQC8LPPQ_iajzYmXBBlwYEpnLIzM"
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Logic for client side 
    let newNotes = JSON.parse(JSON.stringify(notes))
    newNotes.map((note) => {
      if (note._id === id) {
        note.title = title
        note.description = description
        note.tag = tag
      }
    })
    setNotes(newNotes)
  }

  // Delete Notes
  const deleteNote = async (id) => {
    // client side logic
    setNotes(notes.filter((note) => note._id !== id))

    // API call
    const url = `${host}/notes/deletenote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NDUwMjliZjQ0NjA1ODhhNzVhYmJkIiwibmFtZSI6InNoeWFtIn0sImlhdCI6MTczMjU5NzUwOX0.xIQ8sXHY4kelP8ZqQC8LPPQ_iajzYmXBBlwYEpnLIzM"
      }
    });
    const json = await response.json()
    console.log(json)
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, fetchAllNote, addNote, updateNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
