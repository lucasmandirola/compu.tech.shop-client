import React, { useState } from 'react';


export default function FAQ2 ({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && 
      <div 
      className="accordion-content">{content}
      </div>}
    </div>
      
      </div>
  );
};

