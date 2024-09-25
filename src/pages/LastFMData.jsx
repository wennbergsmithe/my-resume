import React, { useState, useEffect } from 'react';

const lastFMAPIKey = process.env.REACT_APP_LASTFM_API_KEY;

export const GetNowListening = ({ userName }) => {
  const [lfmData, updateLfmData] = useState({});
  
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&limit=1&nowplaying=true&format=json`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('error');
        })
        .then(data => updateLfmData(data))
        .catch(() => {
          updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' });
        });
    };

    // Fetch immediately and then every 10 seconds
    fetchData();
    const intervalId = setInterval(fetchData, 10000); // 10000ms = 10 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [userName]); // Re-run the effect if userName or apiKey changes
  
  const buildLastFmData = () => {
    const { error } = lfmData;
    const track = lfmData?.recenttracks?.track;
  
    if (error) {
      return <div className='listening-container'><p>{error}</p>;</div>
    }
  
    if (!track) {
      return <div className='listening-container'><p>Loading</p></div>;
    }
  
    // Extract the first track
    const [{ name: songName, artist: { '#text': artistName } = {}, image = [] } = {}] = track;
  
    // Get the image URL of the "medium" size from the first track's image array
    const imageUrl = image?.find(img => img.size === "medium")?.["#text"] || '';
  
    return (
      <div>
        <div className="listening-container">
          <img 
            src={imageUrl}
            alt={songName} 
            className="listening-image"
          />
          <div className="listening-text">
            <p>{songName}</p>
            <p>{artistName}</p>
          </div>
        </div>
      </div>
    );
  };

  return buildLastFmData();
};


export const GetTopArtists = ({ userName }) => {
  const [lfmData, updateLfmData] = useState({});
  
  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${userName}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json&limit=10`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => updateLfmData(data))
      .catch(() =>
        updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
      );
  }, []);
  
  const buildLastFmData = () => {
    const { error } = lfmData;
    const artists = lfmData?.topartists?.artist;
  
    if (error) {
      return <div className='top-artists-container'><p>{error}</p>;</div>
    }
  
    if (!artists) {
      return <div className='top-artists-container'><p>Loading</p></div>;
    }
  
    return (
      <div className="top-artists-container">
        <h3>wennbergsmithe's top artists:</h3>
        <ol>
          {artists.map((artist, index) => {
            const imageUrl = artist?.image?.find(img => img.size === "medium")?.["#text"] || '';
            return (
              <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                {/* Display artist image */}
                {imageUrl && (
                  <img 
                    src={imageUrl} 
                    alt={artist.name} 
                    style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%' }} 
                  />
                )}
                {/* Display artist name */}
                <a href={artist.url} target="_blank" rel="noopener noreferrer">
                  {artist.name}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    );
  };
  

  return buildLastFmData();
};