import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const intialNotes = [
    {
      _id: "67471ce42a96ca71f1842183",
      user: "67445029bf4460588a75abbd",
      title: "My title",
      description: "Eat Five star do nothing",
      tag: "fun",
      date: "2024-11-27T13:21:40.494Z",
      __v: 0,
    },
    {
      _id: "67471e869c75f3dff9ddabea",
      user: "67445029bf4460588a75abbd",
      title: "My title 2",
      description: "Five star do nothing",
      tag: "fun",
      date: "2024-11-27T13:28:38.845Z",
      __v: 0,
    },
    {
      _id: "67471ce42a96ca71f1842183",
      user: "67445029bf4460588a75abbd",
      title: "My title",
      description: "Eat Five star do nothing",
      tag: "fun",
      date: "2024-11-27T13:21:40.494Z",
      __v: 0,
    },
    {
      _id: "67471e869c75f3dff9ddabea",
      user: "67445029bf4460588a75abbd",
      title: "My title 2",
      description: "Five star do nothing",
      tag: "fun",
      date: "2024-11-27T13:28:38.845Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(intialNotes);

  // Add Notes
  const addNote = (title, description, tag) => {
    const note = {
      _id: "67471e869c75f3dff9ddabea",
      user: "67445029bf4460588a75abbd",
      title: title,
      description: description,
      tag: tag
    }
    setNotes(notes.concat(note))
  }

  //Update Notes
  const updateNote = () => {

  }

  //Delete Notes
  const deleteNote = () => {

  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, updateNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
