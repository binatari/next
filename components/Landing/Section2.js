import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);
const Section2 = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    return (
        <div className="container flex items-center justify-center flex-col">
            <h2 className="text-4xl font-semibold mb-14">Our SaaS Solutions</h2>
            <p className=" mb-16">we have experienced professionals to develop platforms that suit your needs</p>
            <div className='w-full'>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation = {{
            prevEl: prevRef.current,
            nextEl: nextRef.current
        }}
        breakpoints={{
            499: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            910: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10
            }}}
      >
        <SwiperSlide>
         <div className="relative min-h-[30vh]">
         <Image
              className="relative"
              src='/images/saas-entertainment.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            />
         </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative min-h-[30vh]">
        <Image
              className="relative"
              src='/images/saas-education.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="relative min-h-[30vh]">
        <Image
              className="relative"
              src='/images/saas-healthcare.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
              objectPosition='top'
            />
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="relative min-h-[30vh]">
        <Image
      
              className="relative"
              src='/images/saas-commerce.jpg'
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
              objectFit="cover"
            />
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
        </div>
    )
}

export default Section2
