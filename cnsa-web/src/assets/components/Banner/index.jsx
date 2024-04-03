import '../Banner/style.scss';

import banner1 from '../../images/cnsa-banner-default.png';
import banner2 from '../../images/cnsa-banner-default-2.png';
import banner3 from '../../images/cnsa-banner-default-3.png';
import banner4 from '../../images/cnsa-banner-default-4.png';
import banner5 from '../../images/banner-volta-as-aulas.png'

import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {

    return (
        <>
            <section className="sliderContainer">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>
                        <img src={banner1} alt="banner logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner2} alt="banner logo 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner3} alt="banner logo 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner4} alt="banner logo 4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner5} alt="banner logo 5" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Banner;