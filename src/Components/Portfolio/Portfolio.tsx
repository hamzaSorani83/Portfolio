import React from 'react'
import './Portfolio.css'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper';

import AdminPanel from '../../img/adminPanel.webp';
import BurgerBuilder from '../../img/burgerBuilder.webp';
import CanvasGame from '../../img/canvasGame.webp';
import LandingPage from '../../img/landingPage.webp';
import BootstrapPage from '../../img/bootstrapPage.webp';

const Portfolio: React.FC = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        modules={[Thumbs]}
        spaceBetween={40}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://h-react-admin-dashboard.netlify.app/" rel="noreferrer" target="_blank"><img src={AdminPanel} alt="adminPanel" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://hamzasorani83.github.io/bootstrap-landing-page/" rel="noreferrer" target="_blank"><img src={BootstrapPage} alt="bootstrapPage" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://hamzasorani83.github.io/special-design/" rel="noreferrer" target="_blank"><img src={LandingPage} alt="landingPage" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://react-burger-builder-application.netlify.app/" rel="noreferrer" target="_blank"><img src={BurgerBuilder} alt="burgerBuilder" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://hamzasorani83.github.io/canvas-game/" rel="noreferrer" target="_blank"><img src={CanvasGame} alt="canvasGame" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio