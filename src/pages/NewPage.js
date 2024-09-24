// src/pages/NewPage.js
import { GetNowListening, GetTopArtists} from './LastFMData.jsx';
import { LastFmData } from './LastFMData.jsx';
import React from 'react';

function NewPage() {
  return (
    <div className="new-page">
      <GetNowListening
        userName={'wennbergsmithe'}
        apiKey={process.env.REACT_APP_LASTFM_API_KEY}
      />
      <GetTopArtists
        userName={'wennbergsmithe'}
        apiKey={process.env.REACT_APP_LASTFM_API_KEY}
      />
    </div>
  );
}

export default NewPage;
