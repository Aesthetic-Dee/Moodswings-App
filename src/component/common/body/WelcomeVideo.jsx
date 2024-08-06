import React from 'react'
import WelcomeVideo from '../assets/welcomeVideo.mp4'


function Welcome() {
  return (

    // VIDEO SECTION
    <section className='mx-auto'>

      {/* VIDEO CONTAINER */}
      <video autoPlay muted loop controls className="w-full rounded-t-full">
        <source src={WelcomeVideo} type="video/mp4" />
      </video>
      
    </section>
  )
}

export default Welcome;