import Carousel from '@/components/Carousel';
import Header from '@/components/Header';
import topBarItems from '@/components/Layout/DefaultLayout/topBar.constraints';
import { SwiperSlide } from 'swiper/react';

export default function Layout({ children }) {
  return (
    <>
      <div className='page-home'>
        <Carousel>
          {topBarItems.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <a href={item.href} className='topBar-wrapper'>
                  <span>{item.content}</span>
                </a>
              </SwiperSlide>
            );
          })}
        </Carousel>
        <Header />
        {children}
      </div>
    </>
  );
}
