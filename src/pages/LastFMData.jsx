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

export const GetRecentTracks = ({ userName, apiKey }) => {
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