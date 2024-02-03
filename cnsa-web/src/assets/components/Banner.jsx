import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '../css/Banner.module.css';

import banner1 from '../images/cnsa-banner-default.png';
import banner2 from '../images/cnsa-banner-default-2.png';
import banner3 from '../images/cnsa-banner-default-3.png';
import banner4 from '../images/cnsa-banner-default-4.png';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className={styles.sliderContainer}>
            <Slider {...settings}>
                <div>
                    <img src={banner1} alt="banner logo"/>
                </div>
                <div>
                    <img src={banner2} alt="banner logo 2"/>
                </div>
                <div>
                    <img src={banner3} alt="banner logo 3"/>
                </div>
                <div>
                    <img src={banner4} alt="banner logo 4"/>
                </div>
            </Slider>
        </section>
    );
};

export default Banner;