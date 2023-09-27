import "./Intro.css"
 
import React, { useState, useEffect } from 'react';

function Intro() {
  const languages = ['Java ?', 'Python ?', 'C++ ?', 'Coding ?'];
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      timeout = setTimeout(() => {
        const currentLanguage = languages[currentLanguageIndex];
        const nextCharacter = currentLanguage[typedText.length];

        if (nextCharacter) {
          setTypedText((prevText) => prevText + nextCharacter);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setTypedText('');
            setCurrentLanguageIndex((prevIndex) =>
              (prevIndex + 1) % languages.length
            );
            setIsTyping(true);
          }, 2000); // Wait 1 second before typing the next language
        }
      }, 50); // Typing speed (milliseconds per character)
    }

    return () => clearTimeout(timeout);
  }, [isTyping, typedText, currentLanguageIndex, languages]);

  return (
    <div className="intro-section">
      <h1>
        Want to <span>learn</span> 
      </h1> 
       <h3>{typedText}
        {isTyping && <span className="typing-cursor"> |</span>}
      </h3>
      <p>We make programming simple & easy to understand.</p>
    </div>
  );
}

export default Intro;

