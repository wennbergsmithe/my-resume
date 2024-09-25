// src/pages/NewPage.js
import { GetNowListening, GetTopArtists} from './LastFMData.jsx';
import { LastFmData } from './LastFMData.jsx';
import './LastFM.css';
import React from 'react';

function NewPage() {
  return (
    <div className="new-page">

      <div className='listening-container'>
        <h3>Now Playing:</h3>
        <GetNowListening
          userName={'wennbergsmithe'}
        />
      </div>
      <div className='top-artists-container'>
        <h3>My Top 10 Artists of All Time:</h3>
        <GetTopArtists
          userName={'wennbergsmithe'}
        />
      </div>
    </div>
  );
}

export default NewPage;
