import React from 'react';
import Deezer from '../assets/PlatformsLogo/deezer.png';
import Spotify from '../assets/PlatformsLogo/spotify.png';
import Amazonmusic from '../assets/PlatformsLogo/amazonmusic.png';
import Applemusic from '../assets/PlatformsLogo/applemusic.png';
import Audiomack from '../assets/PlatformsLogo/audiomack.png';
import Tidal from '../assets/PlatformsLogo/tidal.png';
import Boomplay from '../assets/PlatformsLogo/boomplay.png';
import Tiktok from '../assets/PlatformsLogo/tiktok.png';
import Youtube from '../assets/PlatformsLogo/youtube.png';
import Instagram from '../assets/PlatformsLogo/instagram.png';

function socials() {
  return (

    // PLATFORM SECTION
    <section className='text-white mt-24'>
        
        {/* TITLE */}
        <div className='flex justify-center'>
          <p className='text-center font-anton text-3xl text-orange-500 sm:mb-5'>Join me on my journey</p>
        </div>

        {/* SOCIAL - MUSIC PLATFORMS */}
        <div className='flex justify-center'>

          {/* CONATINER */}
          <div className='w-4/5 grid gap-5 grid-cols-5 sm:grid-cols-3 items-center place-items-center'>
          <a href="https://www.deezer.com/en/track/2172232347?deferredFl=1" className='text-center font-anton text-2xl'><img src={Deezer} alt="Deezer logo - link" className='w-56'/> Deezer </a>
            <a href="https://open.spotify.com/track/5HcZhem8UgIjURtUZJiUx9?si=VJIz-U1VQ-26a-2MtkUT0A&dd=1&nd=1&utm_medium=organic&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F5HcZhem8UgIjURtUZJiUx9%3Fsi%3DVJIz-U1VQ-26a-2MtkUT0A%26dd%3D1&feature=organic&_branch_match_id=1044940236946677565&_branch_referrer=H4sIAAAAAAAAA72N0QqCMBiFn2bdqTlLKpAIQlLoomheeBNrTl1ON%2BY%2FqJ6%2BWfQKwYH%2F8B%2FO%2BVoAPW6CYNQKRP30qda%2BFEMXbLVRlWWQKM2HGcKL2kp5tUYm7VRB0Q7h1GmK%2FV%2Bbqd69wFDWubs8sLLl%2FYo02Z2cgZS5II81itJRoGhf5NnLI2Fx8nBMPXyEjlzmbjSuKpeGHySV8ua2%2Foh1Zvjya07BGp4o09BBsDcG7GlxKQEAAA%3D%3D" className='text-center font-anton text-2xl'><img src={Spotify} alt="Spotify logo - link" className='w-80'/>Spotify</a>
            <a href="https://music.amazon.com/albums/B0BX7DXN48?trackAsin=B0BX7FD4JT&do=play&ref=dm_ff_featurefm&tag=featurefm-20" className='text-center font-anton text-2xl'><img src={Amazonmusic} alt="Amazon logo - link" className='w-56'/>Amazon Music</a>
            <a href="https://music.apple.com/es/album/attention/1675146542?i=1675146543" className='text-center font-anton text-2xl'><img src={Applemusic} alt="Apple logo - link" className='w-56'/>Apple Music</a>
            <a href="https://audiomack.com/MOODSWINGS/song/attention?utm_source=featurefm&utm_campaign=onelink&utm_medium=website&ffm=FFM_5cc88960ac7d9e950eccaf079dcec0e5" className='text-center font-anton text-2xl'><img src={Audiomack} alt="Audiomack logo - link" className='w-56'/>Audiomack</a>
            <a href="https://tidal.com/browse/track/279558672" className='text-center font-anton text-2xl'><img src={Tidal} alt="Tidal logo - link" className='w-56'/>Tidal</a>
            <a href="https://www.boomplay.com/songs/118957397?srModel=openapi_featurefm" className='sm:hidden text-center font-anton text-2xl'><img src={Boomplay} alt="Boomplay logo - link" className='w-56'/>Boomplay</a>
            <a href="https://www.tiktok.com/@iammoodswings?_t=8oOwiKnklk6&_r=1" className='text-center font-anton text-2xl'><img src={Tiktok} alt="Tiktok logo - link" className='w-56'/>TikTok</a>
            <a href="https://m.youtube.com/watch?v=dEZ5Db3PHgo&src=FFM&lid=00000000-6436-479f-2500-002d0088b0e5&cid=eef267f6-3f51-5d46-a717-711ac12bcf76" className='text-center font-anton text-2xl'><img src={Youtube} alt="Youtube logo - link" className='w-56'/>YouTube</a>
            <a href="https://www.instagram.com/moodswings" className='text-center font-anton text-2xl'><img src={Instagram} alt="Instagram logo - link" className='w-56'/>Instagram</a>
          </div>

        </div>

    </section>
  )
}

export default socials;