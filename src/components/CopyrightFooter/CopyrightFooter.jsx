import "./CopyrightFooter.css"

import React from 'react';

function CopyrightFooter() {
  const currentYear = new Date().getFullYear();
  const companyName = "Sunfire Sensei";

  return (
    <footer>
      <p>&copy; {currentYear} {companyName}. All rights reserved.</p>
    </footer>
  );
}

export default CopyrightFooter;
