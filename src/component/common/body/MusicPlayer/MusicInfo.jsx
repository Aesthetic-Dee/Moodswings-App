import React from 'react';

function MusicInfo({ name, artist }) {
  return (
    
    // MUSIC NAME AND ARTIST COMPONENT
    <div className="text-center my-8 text-orange-400 font-medium">
      <p className="text-lg">{name}</p>
      <p className="text-base mt-1 opacity-90">{artist}</p>
    </div>
  );
}

export default MusicInfo;