import Head from 'next/head'
import Image from 'next/image';
import Navbar from '../components/Navbar'
import Content from '../components/Company/Content';
import Sidebar from '../components/Company/Sidebar';
import Footer from '../components/Company/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


SwiperCore.use([Pagination, Navigation]);

const company = () => {
    return (
        <div>
            <Head>
        <title>Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className='bg-slateWhite'>
        <div className='w-full'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='px-4'
      >
        <SwiperSlide>
         <div className=" relative min-h-[80vh] items-center justify-center grid grid-cols-2 w-4/5 mx-auto">
           <div className='flex flex-col items-center justify-center'>
           <button className='bg-darkPurple text-slateWhite px-3 py-2 rounded-full self-start'>Get a Quote</button>
           <h1 className=' text-4xl py-3 self-start font-bold' >Reason for choosing MERN Stack</h1>
            <span className='text-darkPurple self-start'>date</span>
           </div>
           <div className='flex flex-col items-center justify-center'>
           <div className="relative h-[60vh] w-[50vh] max-h-[60em] max-w-[60em] border rounded-lg bg-gray-600">
                <Image
                className="relative"
              src='/images/dribble-mockup.png'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />  
            </div>
           </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='min-h-[80vh]'>example</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='min-h-[80vh]'>example</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='min-h-[80vh]'>example</div>
        </SwiperSlide>
      </Swiper> 
        </div>
       <section className=' flex flex-wrap md:flex-nowrap container mx-auto mb-16'>
           <Content/>
           <Sidebar/>
       </section>
       <section className='flex flex-col items-center justify-center py-24 bg-pitchBlack'>
           <Footer/>
       </section>
     </main>
     </div>
    )
}

export default company
