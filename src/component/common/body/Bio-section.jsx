import React from 'react';
import BioIMG3 from '../assets/bioIMG3.jpg';
import BioIMG from '../assets/bioIMG.jpg';
import BioIMG2 from '../assets/bioIMG2.jpg';

function Bio() {
  return (

    // BIOGRAPHY - DESCRIPTION SECTION
    <section className='text-white max-w-7xl mx-auto sm:px-0 lg:px-8 py-8 sm:py-0 lg:py-16'>
    
      {/* DAVID EFFIONG DESCRIPTION */}
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-20'>

        {/* PROFILE IMG */}
        <img className='h-120 w-full mx-auto lg:hidden' src={BioIMG} alt="Moodswings in studio" />
        
        {/* PARAGRAPH CONTAINER */}
        <div className='flex-1 my-auto sm:px-4'>
          <h1 className='text-gray-400 text-4xl font-cbg font-bold sm:text-4xl lg:text-7xl mb-4 sm:mb-0'>DAVID EFFIONG</h1>
          <p className='font-anton text-3xl sm:text-xl'>Born in Creek Town, Nigeria, 1999 started senior high school in Hope-Waddell, where he began writing songs, out of teenage fever he wrote about his life experiences and future fantasies his first song in a studio GOOD TIME was nominated for <span className='text-orange-400'>best alternative single in Abuja alongside acts like Chike for the year 2021.</span></p>
        </div>

        <img className='sm:hidden w-2/4 rounded-lg h-160 object-cover' src={BioIMG3} alt="Moodswings in studio" />
      </div>
      {/* DESCRIPTION END */}


      {/* MOODSWINGS DESCRIPTION */}
      <div className='flex flex-col justify-center lg:flex-row sm:gap-8 text-3xl mt-5'>

        {/* PROFILE IMAGE */}
        <img className='w-full mx-auto lg:hidden' src={BioIMG2} alt="" />
        
        {/* PARAGRAGH CONTAINER */}
        <div className='flex-1 w-2/3 m-auto sm:w-auto content-center text-center font-anton sm:pt-5 sm:pl-5 sm:pr-5'>
          <p className='text-3xl sm:text-2xl mb-4'><span className='text-gray-400 text-6xl font-cbg font-bold sm:text-5xl'>MOODSWINGS</span> and <span className='text-orange-500'>Afro-groove</span> is the awakening of cyclothymia in his teenage age causing regular moodswings which then inspired the uniqueness of his aesthetics in crafting music that is calm and appealing but yet groovy.</p>
          <p className='text-2xl text-orange-400 mb-5 sm:m-0'>Significant influencers of his sound are Calvin Harris, Burna Boy, and Drake.</p>
        </div>
      </div>
      {/* DESCRIPTION END */}

    </section>
  )
}

export default Bio;