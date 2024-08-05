import React, { useState, useEffect } from 'react';

function ProgressBar({ audioRef }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      const duration = audio.duration;
      const currentTime = audio.currentTime;
      const progressPercent = (currentTime / duration) * 100;
      setProgress(progressPercent);
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, [audioRef]);

  return (
    <div className="w-full h-[6px] bg-[#ccc] rounded-[15px] mt-4 mb-2">
      <div 
        className="h-full bg-amber-500 rounded-[inherit] relative cursor-pointer"
        style={{ width: `${progress}%` }}
      >
        <span className="absolute w-[12px] h-[12px] bg-[#0987f6] rounded-full transform -translate-y-1/4 right-[-5px] opacity-0 transition-opacity duration-300 ease-out hover:opacity-100" />
      </div>
    </div>
  );
}

export default ProgressBar;