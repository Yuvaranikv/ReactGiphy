import React, { useEffect, useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch('N95qIVi6lkqYZbev1opFJguGvsvu9LPo');

function App() {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null);
  const [saved, setSavedGifs] = useState(() => {
    // Initialize state with saved GIFs from localStorage if available
    const savedGifs = localStorage.getItem('savedGifs');
    return savedGifs ? JSON.parse(savedGifs) : [];
  });

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await gf.trending({ limit: 10, rating: 'g' });
        setGifs(response.data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setError('Unauthorized: Invalid API Key or Permissions Issue.');
        } else {
          setError('An unexpected error occurred.');
        }
      }
    };

    fetchGifs();
  }, []);

  const handleSave = (gifUrl) => {
    const updatedSavedGifs = [...saved, gifUrl];
    setSavedGifs(updatedSavedGifs);
    localStorage.setItem('savedGifs', JSON.stringify(updatedSavedGifs));
    
  };


    

  

  return (
    <div>
      <h1>Home Trending GIFs</h1>
      {error && <p>Error: {error}</p>}
      <div>
        {gifs.map(gif => (
          <div key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <button onClick={() => handleSave(gif.images.fixed_height.url)}>Save</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
