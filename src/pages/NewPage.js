// src/pages/NewPage.js
import { GetNowListening } from './LastFMData.jsx';
import { LastFmData } from './LastFMData.jsx';
import React from 'react';

function NewPage() {
  return (
    <div className="new-page">
      <GetNowListening
        userName={'wennbergsmithe'}
        apiKey={'c9ceb7f3915bf85eae2db94f6dbde629'}
      />
    </div>
  );
}

export default NewPage;
