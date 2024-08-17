import React from 'react'
import WelcomeVideo from '../assets/welcomeVideo.mp4'


function Welcome() {
  return (

    // VIDEO SECTION
    <section className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-0 lg:my-8'>

      {/* VIDEO CONTAINER */}
      <div className='aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg'>
        <video autoPlay muted loop controls className="w-full h-full object-cover">
          <source src={WelcomeVideo} type="video/mp4" />
        </video>
      </div>
      
    </section>
  )
}

export default Welcome;