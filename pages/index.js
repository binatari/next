import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image';
import Clients from '../components/Landing/Clients';
import Estimation from '../components/Landing/Estimation';
import Footer from '../components/Landing/Footer';
import Projects from '../components/Landing/Projects'
import Section2 from '../components/Landing/Section2';
import Services from '../components/Landing/Services'
import Testimonials from '../components/Landing/Testimonials';
import Products from '../components/Landing/Products'
import Locations from '../components/Landing/Locations';


import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


SwiperCore.use([Pagination, Navigation]);
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        <div className='w-full'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='px-4'
      >
        <SwiperSlide>
         <div className=" relative min-h-[80vh] bg-[url(/images/hero-image-1.jpg)] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-darkPurple before:opacity-50 before:z-10  before:content-['*']  bg-cover bg-center flex items-center justify-center flex-col ">
           <div className='flex flex-col items-center justify-center w-4/5 md:w-1/2 z-10'>
           <h1 className='text-slateWhite text-5xl py-3 text-center' >We offer IT services</h1>
           <p className='text-slateWhite py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum delectus libero illo aspernatur quisquam repellat quaerat autem! Maxime quo laborum vero molestias excepturi eum. Aperiam labore magnam saepe maiores dolor?</p>
           <button className='bg-darkPurple text-slateWhite p-3 rounded-sm'>Get a Quote</button>
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
      <div className='mx-auto'>
      <section className='flex items-center justify-center flex-co py-24 bg-slateWhite'>
      <Section2/>
      </section>
      <section className='flex flex-col items-center justify-center py-24 bg-darkPurple'>
      <Services/>
      </section>
      <section className='flex items-center justify-center flex-co py-24 bg-slateWhite'>
      <Products/>
      </section>
      <section className='flex flex-col items-center justify-center py-40 bg-darkPurple relative'>
      <Clients/>
      </section>
      <section className='flex flex-col items-center justify-center py-24 bg-slateWhite'>
      <Projects/>
      </section>
      <section className='flex flex-col items-center justify-center py-24 bg-darkPurple'>
      <Testimonials/>
      </section>
      <section className='flex flex-col items-center justify-center py-24 bg-slateWhite'>
      <Estimation/>
      </section>
      <section className='flex flex-col items-center justify-center py-24 bg-darkPurple'>
      <Locations/>
      </section>
      </div>
      </main>

      <footer className='flex flex-col items-center justify-center py-24 bg-pitchBlack'>
      <Footer/>
      </footer>
    </div>
  )
}
