import React, { useEffect, useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res, json())
      .then((data) => setNotes(data));
  });
  return (
    <div>
      <h1>List of notes</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {Notes.map((note) => (
            <li key={note.id}>{notes.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
