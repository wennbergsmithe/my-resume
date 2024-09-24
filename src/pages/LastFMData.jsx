import React, { useState, useEffect } from 'react';

export const GetNowListening = ({ userName, apiKey }) => {
  const [lfmData, updateLfmData] = useState({});
  
  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
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
    const  { error } = lfmData;
    const track = lfmData?.recenttracks?.track;
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!track) {
      return <p>Loading</p>;
    }
  
    const [
      { name: songName, artist: { '#text': artistName } = {} } = {}
    ] = track;
  
    return <h3>Currently listening to: {songName} by {artistName}</h3>;
  };

  return buildLastFmData();
};

export const GetTopArtists = ({ userName, apiKey }) => {
  const [lfmData, updateLfmData] = useState({});
  
  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${userName}&api_key=${apiKey}&format=json`)
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
      return <p>{error}</p>;
    }
  
    if (!artists) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <h3>wennbergsmithe's top artists:</h3>
        <ol>
          {artists.map((artist, index) => {
            const imageUrl = artist?.image?.find(img => img.size === "small")?.["#text"] || '';
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