// src/pages/NewPage.js
import { GetNowListening, GetTopArtists} from './LastFMData.jsx';
import { LastFmData } from './LastFMData.jsx';
import './LastFM.css';
import React from 'react';

function NewPage() {
  return (
    <div className="new-page">
      <GetNowListening
        userName={'wennbergsmithe'}
      />
      <GetTopArtists
        userName={'wennbergsmithe'}
      />
    </div>
  );
}

export default NewPage;
