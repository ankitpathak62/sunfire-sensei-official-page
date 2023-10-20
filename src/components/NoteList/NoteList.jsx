// NoteList.js
import React from 'react';
import './NoteList.css'; // Import your CSS file for styling

const notesData = [
  {
    id: 1,
    logo: 'logo1.png', // Replace with the actual file path of your logo
    title: 'Placement Preparation',
    text: 'Ace the placement interviews by being knowledgeable in all well-known data structures, popular problem-solving methods, and core computer sciences.',
  },
  {
    id: 2,
    logo: 'datastruct.svg', // Replace with the actual file path of your logo
    title: 'Data Structure',
    text: 'Data structures are the problem-solving pillars of coding. Learn all the foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews.',
  },
  {
    id: 3,
    logo: 'logo3.png', // Replace with the actual file path of your logo
    title: 'Learn Something new',
    text: 'Learn new concepts daily, increase your productivity & reach your full potential.',
  },
  {
    id: 4,
    logo: 'logo4.png', // Replace with the actual file path of your logo
    title: 'Learn from the best',
    text: 'Get access to lectures and get mentored by one of the best in the market.',
  },
  {
    id: 5,
    logo: 'logo5.png', // Replace with the actual file path of your logo
    title: 'Curated Content',
    text: 'Learn in-depth conceptual overviews, how to approach an algorithm, how to implement it & how to optimize it.',
  },
  {
    id: 6,
    logo: 'bi bi-diagram-2', // Replace with the actual file path of your logo
    title: 'Hand Picked Question',
    text: 'Get access to hand-picked coding interview questions across categories & difficulty levels that will prepare you for every interview you would encounter.',
  },
];

const NoteList = () => {
  const upperNotes = notesData.slice(0, 3); // First 3 notes
  const lowerNotes = notesData.slice(3, 6); // Last 3 notes

  return (

    <div className="note-list">
         <h1 className="note-heading1">
         WHY SUNFIRE SENSEI?
      </h1>
         <h1 className="note-heading">
        Making learning easier and more convenient for you.
      </h1>
      <div className="upper-notes">
        {upperNotes.map((note) => (
          <div key={note.id} className="note">
            <img src={note.logo} alt={`Logo ${note.id}`} className="note-logo" />
            <h2 className="note-title">{note.title}</h2>
            <p className="note-text">{note.text}</p>
          </div>
        ))}
      </div>

      <div className="lower-notes">
        {lowerNotes.map((note) => (
          <div key={note.id} className="note">
            <img src={note.logo} alt={`Logo ${note.id}`} className="note-logo" />
            <h2 className="note-title">{note.title}</h2>
            <p className="note-text">{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
