import '../Banner/style.scss';

import banner1 from '../../images/cnsa-banner-default.webp';
import banner2 from '../../images/banner-matriculas-abertas.webp';
import banner3 from '../../images/cnsa-banner-default-2.webp';
import banner4 from '../../images/banner-volta-as-aulas.webp';

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
                </Swiper>
            </section>
        </>
    );
};

export default Banner;