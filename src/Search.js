import React, { useEffect, useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import {gif} from '@giphy/react-components';

const gf = new GiphyFetch('N95qIVi6lkqYZbev1opFJguGvsvu9LPo');

const Search =()=>{
    const [keyword,setKeyword]=useState('');
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch= 
   async () => {
      try {
        const response = await gf.search(keyword,{ limit: 10 });
        console.log("searched");
        setGifs(response.data);
        setError(null);
      } catch (err) {
      
          setError('Failed to fetch daata');
        }
      }
   

  const  handleChange=(event)=>
  {
    setKeyword(event.target.value);
    console.log({keyword})
  }

  return (
    <div>
      <h1>Search  GIFs</h1>
     <input type="text" value={keyword} onChange={handleChange} placeholder= 'Search for gifs'></input>
     <button  onClick={handleSearch}>Search</button>
     {error && <p>Error: {error}</p>}
      <div>
        {gifs.map(gif => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
}

export default Search;
