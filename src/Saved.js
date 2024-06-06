import React, { useEffect, useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom'; 

function Saved() {
  const [saved, setSavedGifs] = useState(() => {
    const savedGifs = localStorage.getItem('savedGifs');
    return savedGifs ? JSON.parse(savedGifs) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedGifs', JSON.stringify(saved));
  }, [saved]);

  const handleRemove = (index) => {
    const updatedSavedGifs = saved.filter((_, i) => i !== index);
    setSavedGifs(updatedSavedGifs);
  };

  return (
    <div>
      <h1>Saved GIFs</h1>
      
      <div>
        {saved.map((gifUrl, index) => (
          <div key={index}>
            <img src={gifUrl} alt={`Saved GIF ${index}`} />
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Saved;
