import data from '@texts/main/index.json';
import s from './testimonials.module.scss';
import { Upwork } from '@shared/assets/icons/main/upwork';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Triangle } from '@shared/assets/icons/main/triangle';

export const Testimonials = () => (
  <section className={s.root}>
    <h2 className={s.title}>{data.testimonials.title}</h2>

    <Swiper
      spaceBetween={16}
      centeredSlides={false}
      speed={1000}
      freeMode={true}
      className={s.swiper}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 2.2,
        },
      }}
    >
      {data.testimonials.list.map((item, idx) => (
        <SwiperSlide key={idx} className={s.slide}>
          <div className={s.topContentWrapper}>
            <div className={s.upwork}>
              <Upwork className={s.upworkIcon} />
            </div>

            <p className={s.reviewText}>{item.review}</p>
            <Triangle className={s.arrowDown} />
          </div>

          <div className={s.bottomContentWrapper}>
            <div className={s.logo} />

            <div className={s.bottomContentTitleAndDateWrapper}>
              <h3 className={s.reviewTitle}>{item.title}</h3>
              <span className={s.date}>{item.date}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
