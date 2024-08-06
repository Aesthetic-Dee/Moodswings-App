import React from 'react';

function Header() {
  return (

    // HEADER SECTION
    <header className='bg-transparent sm:bg-slate-900 sm:sticky sm:top-0 sm:text-center sm:w-screen'>
      
      {/* INTERNAL CSS STYLING FOR THE ANIMATED LINEAR GRADIENT BORDER */}
      <style>
        {`
        .headerBorder {
          background: linear-gradient(-45deg, #f0440e, #f0440e, #11f018, #FFA500, #FFA500, #ffffff, #ffffff);
          background-size: 400% 400%;
          animation: gradient 10s ease infinite;
          
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        `}
      </style>
      {/* INTERNAL CSS - END */}


      {/* APP NAME - TITLE */}
      <section className='py-2'>
        <p className='text-white font-satisfy font-bold screen text-4xl pl-10 sm:pl-0'>Moodswings <span className='text-gray-400'> Music </span></p>
      </section>


      {/* BORDER */}
      <div className='headerBorder h-0.5'></div>

    </header>
  )
}

export default Header;
