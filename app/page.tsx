"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';

import 'swiper/css/effect-cards';
function Index() {
  return ( 
    <>
    <div className="wrapper"> 
    <div className="page1">
      <video loop autoPlay muted src='https://videos.pexels.com/video-files/6942639/6942639-sd_640_360_25fps.mp4'/>
      <div className="icons"></div>
      <div className="glass"></div>
      <div className="text"> 
      <h1>CONNECTING BRANDS</h1>
      <h2>WITH GLOBAL AUDIENCES</h2>
      </div>
      </div>
    <div className="page2">
        <div className='txt'> <h1>Services</h1></div>
    <Swiper 
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide   style={{background:'linear-gradient(0deg, #81B6B9FF 0%, #181B22FF 100%)'}} >
        <div className='Spic1' style={{width:"100%"}}>
            
             <img style={{width:"50%",marginLeft:"10%",marginTop:"10%"}} src='https://www.digitalgravity.ae/assets/images/home/services/digital-branding.webp'/></div>
          <h1>Digital Branding & Communication</h1></SwiperSlide>
        <SwiperSlide style={{background:'linear-gradient(105deg, #81AEB9FF 0%, #0B3E60FF 100%)'}}>
        <div className='Spic1' style={{width:"100%"}}>
             <img style={{width:"50%",marginLeft:"10%",marginTop:"10%"}} src='https://www.digitalgravity.ae/assets/images/home/services/ui-ux-design.webp'/></div>
          <h1 style={{paddingTop:"3%"}}> UI / UX Designs</h1></SwiperSlide>
        
        
        <SwiperSlide style={{background:"linear-gradient(58deg, #483094FF 0%, #690E84FF 61%)"}}>
        <div className='Spic1' style={{ width:"100%"}}>
             <img style={{width:"50%",marginLeft:"10%",marginTop:"10%"}} src='https://www.digitalgravity.ae/assets/images/home/services/web-development.webp'/></div>
          <h1 style={{paddingTop:"3%"}}>Web Development</h1></SwiperSlide>
        
        
        <SwiperSlide style={{background:"linear-gradient(81deg, #35DD58FF 0%, #2B576AFF 82%)"}}>
        <div className='Spic1' style={{width:"100%"}}>
             <img style={{width:"50%",marginLeft:"10%",marginTop:"10%"}} src='https://www.digitalgravity.ae/assets/images/home/services/video-animation.webp'/></div>
          <h1 style={{paddingTop:"3%"}}> Video Animation</h1></SwiperSlide>
        
        
        <SwiperSlide style={{background:"linear-gradient(81deg, #35DD58FF 0%, #2B576AFF 82%)"}}>
        <div className='Spic1' style={{width:"100%"}}>
             <img style={{width:"50%",marginLeft:"10%",marginTop:"10%"}} src='https://www.digitalgravity.ae/assets/images/home/services/it-resource.webp'/></div>
          <h1  > IT Resource Outsourcing</h1></SwiperSlide>
        
        
        <SwiperSlide style={{background:"linear-gradient(81deg, #35DD58FF 0%, #2B576AFF 82%)"}}>
        <div className='Spic1' style={{width:"100%"}}>
             <img style={{width:"50%",marginLeft:"10%",marginTop:"10%"}} src='https://www.digitalgravity.ae/assets/images/home/services/digital-marketing.webp'/></div>
          <h1 style={{paddingTop:"3%"}}> Digital Marketing</h1></SwiperSlide>
        
        
        <SwiperSlide><h1 style={{paddingTop:"3%"}}> Graphic Designing</h1></SwiperSlide>
        
        
        <SwiperSlide><h1 style={{paddingTop:"3%"}}> Package Designing</h1></SwiperSlide>
         
      </Swiper>

       
</div>
<div className="responsive">
<Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide style={{borderRadius:"20px",background:"linear-gradient(81deg, #35DD58FF 0%, #2B576AFF 82%)"}}>Logo Designing</SwiperSlide>
        <SwiperSlide style={{borderRadius:"20px",background:'linear-gradient(105deg, #81AEB9FF 0%, #0B3E60FF 100%)'}}>UI / UX</SwiperSlide>
        <SwiperSlide style={{borderRadius:"20px",background:"linear-gradient(58deg, #483094FF 0%, #690E84FF 61%)"}}>Web Development</SwiperSlide>
        <SwiperSlide style={{borderRadius:"20px",}}>Digital Marketing</SwiperSlide>
        <SwiperSlide style={{borderRadius:"20px",}}>Video Animation</SwiperSlide>
        <SwiperSlide style={{borderRadius:"20px",}}>Graphic Designing</SwiperSlide>
        <SwiperSlide style={{borderRadius:"20px",}}>Package Designing</SwiperSlide>
         
      </Swiper>
</div>
    <div className="page3">
      <div className='bgShades'></div>
      <div className='glass'>
        <h1>ABOUT</h1>
      </div>
    </div>
    </div>
    </>
   );
}

export default Index;