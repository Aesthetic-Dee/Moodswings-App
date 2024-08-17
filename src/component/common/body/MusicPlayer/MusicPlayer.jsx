import React, { useState, useRef, useEffect } from 'react';
import TopBar from './TopBar';
import MusicImage from './MusicImage';
import MusicInfo from './MusicInfo';
import ProgressBar from './ProgressBar';
import Controls from './Controls';
import GoodTimeLogo from './Rotating-disk-image/GoodTimeLogo.jpg';

// SONGS ARRAY - NAME, ARTIST, IMG, AUDIO
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
// SONGS ARRAY END


function MusicPlayer() {

  // USE STATES FOR THE CONTROLS
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const audioRef = useRef(null);
  const currentSong = songs[currentSongIndex];


  // USE EFFECT FOR THE PLAY / PAUSE BUTTON
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


  // NEXT BUTTON FUNCTION
  const nextSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  // PREVIOUS BUTTON FUNCTION
  const prevSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  // SHUFFLE BUTTON FUNCTION
  const shuffleHandler = () => {
    setIsShuffled(!isShuffled);
  };

  // REPEAT BUTTON FUNCTION
  const repeatHandler = () => {
    setIsRepeating(!isRepeating);
  };

  // THE REPEAT FUNCTION
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

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-5 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* INTERNAL STYLING FOR ROTATING DISK IMAGE */}
        <style>
          {`
          .rotate {
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

        {/* ROTATING DISK IMAGE */}
        <img 
          src={GoodTimeLogo} 
          alt="Good Time Cover Image" 
          className='sm:hidden rotate rounded-full w-2/5 max-w-md'
        />
        
        {/* MUSIC PLAYER COMPONENTS CONTAINER */}
        <div className="text-white w-96 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 rounded-2xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-gray-500 shadow-lg">
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
          <audio ref={audioRef} src={currentSong.audio} onEnded={endSongHandler} />
        </div>
        {/* MUSIC PLAYER END */}

      </div>
    </div>
  );
}

export default MusicPlayer;