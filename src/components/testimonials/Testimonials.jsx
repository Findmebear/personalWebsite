import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVTR1,
    name: 'Alibek Kaliyev',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tenetur recusandae culpa, impedit, commodi natus facere molestias harum facilis, assumenda itaque laboriosam non saepe tempora odio iste! Itaque, sed. Fugiat!'
  },
  {
    avatar: AVTR2,
    name: 'Dr. Mark Erle',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tenetur recusandae culpa, impedit, commodi natus facere molestias harum facilis, assumenda itaque laboriosam non saepe tempora odio iste! Itaque, sed. Fugiat!'
  },
  {
    avatar: AVTR3,
    name: 'Dr. Hank Korth',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tenetur recusandae culpa, impedit, commodi natus facere molestias harum facilis, assumenda itaque laboriosam non saepe tempora odio iste! Itaque, sed. Fugiat!'
  },
  {
    avatar: AVTR4,
    name: 'Evan Greenberg',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tenetur recusandae culpa, impedit, commodi natus facere molestias harum facilis, assumenda itaque laboriosam non saepe tempora odio iste! Itaque, sed. Fugiat!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key ={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials