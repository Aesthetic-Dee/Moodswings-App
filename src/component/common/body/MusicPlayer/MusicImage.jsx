import React from 'react';

function MusicImage({ img }) {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-[230px] h-[230px] rounded-full">
        <img 
          src={img}
          alt="Music Cover" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
}

export default MusicImage;