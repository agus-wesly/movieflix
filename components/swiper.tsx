'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '@/style/swiper.css'

import { Pagination, Navigation, Autoplay } from 'swiper'

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="object-cover object-top"
            alt="image-1"
            fill
            src="/pictures/swiper/1.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="object-cover object-top"
            fill
            alt="image-1"
            src="/pictures/swiper/2.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="object-cover object-top"
            fill
            alt="image-1"
            src="/pictures/swiper/3.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="object-cover object-center"
            fill
            alt="image-1"
            src="/pictures/swiper/4.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
