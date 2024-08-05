import React, { useState, useRef, useEffect } from 'react';
import TopBar from './TopBar';
import MusicImage from './MusicImage';
import MusicInfo from './MusicInfo';
import ProgressBar from './ProgressBar';
import Controls from './Controls';

import GoodTimeLogo from './Images/GoodTimeLogo.jpg';

const songs = [
  {
    name: "Good Time - Moodswings",
    artist: "Moodswings",
    img: `${process.env.PUBLIC_URL}/musicPlayerImages/goodtimeImg.jpg`,
    audio: `${process.env.PUBLIC_URL}/musicPlayerSongs/goodtime.mp3`
  },
  {
    name: "Attention - Moodswings",
    artist: "Moodswings",
    img: `${process.env.PUBLIC_URL}/musicPlayerImages/attentionImg.jpg`,
    audio: `${process.env.PUBLIC_URL}/musicPlayerSongs/attention.mp3`
  },
  {
    name: "Good Time Speed Up - Moodswings",
    artist: "Moodswings",
    img: `${process.env.PUBLIC_URL}/musicPlayerImages/gsuImg.jpg`,
    audio: `${process.env.PUBLIC_URL}/musicPlayerSongs/gsu.mp3`
  },
  {
    name: "Attention Speed Up - Moodswings",
    artist: "Moodswings",
    img: `${process.env.PUBLIC_URL}/musicPlayerImages/asuImg.jpg`,
    audio: `${process.env.PUBLIC_URL}/musicPlayerSongs/asu.mp3`
  }
];

function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  const shuffleHandler = () => {
    setIsShuffled(!isShuffled);
  };

  const repeatHandler = () => {
    setIsRepeating(!isRepeating);
  };

  const endSongHandler = () => {
    if (isRepeating) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else if (isShuffled) {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * songs.length);
      } while (nextIndex === currentSongIndex);
      setCurrentSongIndex(nextIndex);
    } else {
      nextSongHandler();
    }
  };

  return (
    <div className="flex items-center justify-around mt-24 sm:mt-10 mb-24 sm:mb-10">
      <style>
        {`
        .rotate{
          animation: rotation 8s infinite linear;
        }

        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
      <img src={GoodTimeLogo} alt="Good Time Cover Image" className='sm:hidden rotate rounded-full w-2/5' />
      <div className="text-white w-[350px] rounded-[15px] p-[25px_30px] border-4 border-gray-500">
        <TopBar />
        <MusicImage img={currentSong.img} />
        <MusicInfo name={currentSong.name} artist={currentSong.artist} />
        <ProgressBar audioRef={audioRef} />
        <Controls 
          isPlaying={isPlaying}
          onPlayPause={playPauseHandler}
          onNext={nextSongHandler}
          onPrev={prevSongHandler}
          onShuffle={shuffleHandler}
          onRepeat={repeatHandler}
          isShuffled={isShuffled}
          isRepeating={isRepeating}
        />
        <audio 
          ref={audioRef}
          src={currentSong.audio}
          onEnded={endSongHandler}
        />
      </div>
    </div>
  );
}

export default MusicPlayer;