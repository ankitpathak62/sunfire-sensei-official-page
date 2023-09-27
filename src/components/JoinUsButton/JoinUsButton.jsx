import React from 'react';
import './JoinUsButton.css'; // Create a CSS file for styling

const JoinUsButton = () => {
  return (
    <a
      href="https://www.youtube.com/channel/UCTEOyTTgHS9ZWYemb56Ik1w" // Replace with your "Join Us" link
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer"
      className="join-us-button"
    >
      Join Us
    </a>
  );
};

export default JoinUsButton;
