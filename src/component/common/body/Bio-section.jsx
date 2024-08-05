import React from 'react';
import BioIMG3 from '../assets/bioIMG3.jpg';
import BioIMG from '../assets/bioIMG.jpg';
import BioIMG2 from '../assets/bioIMG2.jpg';

function Bio() {
  return (
    <section className=' text-white sm:w-screen'>
      
      <div className='flex sm:flex-col gap-5 justify-center mt-0 sm:mt-0'>
        <img className='h-120 lg:hidden' src={BioIMG} alt="Moodswings in studio" />
        <div className='content-center ml-10 sm:ml-5 sm:mr-5'>
          <p className='text-gray-400 text-7xl font-cbg font-bold sm:text-4xl'>DAVID EFFIONG</p>
          <p className='font-anton text-3xl'>Born in Creek Town, Nigeria, 1999 started senior high school in Hope-Waddell, where he began writing songs, out of teenage fever he wrote about his life experiences and future fantasies his first song in a studio GOOD TIME was nominated for <span className='text-orange-400'>best alternative single in Abuja alongside acts like Chike for the year 2021.</span></p>
        </div>

        <img className='w-2/4 rounded-3xl h-160 sm:hidden' src={BioIMG3} alt="Moodswings in studio" />
      </div>


      <div className='flex flex-col justify-center text-3xl mt-5'>
        <img className='w-max lg:hidden' src={BioIMG2} alt="" />
        <div className='w-2/3 m-auto sm:w-auto content-center font-anton sm:pt-5 sm:pl-5 sm:pr-5'>
          <p className='text-3xl sm:text-3xl mb-5'><span className='text-gray-400 text-6xl font-cbg font-bold sm:text-5xl'>MOODSWINGS</span> and Afro-groove is the awakening of cyclothymia in his teenage age causing regular moodswings which then inspired the uniqueness of his aesthetics in crafting music that is calm and appealing but yet groovy.</p>
          <p className='text-2xl text-orange-400 mb-5'>Significant influencers of his sound are Calvin Harris, Burna Boy, and Drake.</p>
        </div>
      </div>

    </section>
  )
}

export default Bio;