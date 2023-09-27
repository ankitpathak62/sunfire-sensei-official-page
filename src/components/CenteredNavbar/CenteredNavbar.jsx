 
import "./CenteredNavbar.css"

import React from 'react';

function MenuBar() {
  const languages = ['Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP'];

  return (
    <div className="menu-bar">
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <a href={`#${language.toLowerCase()}`}>{language}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuBar;
