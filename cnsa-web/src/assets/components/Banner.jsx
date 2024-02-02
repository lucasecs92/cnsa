import styles from '../css/Banner.module.css';

import banner1 from '../images/cnsa-banner-default.png';
import banner2 from '../images/cnsa-banner-default-2.png';
import banner3 from '../images/cnsa-banner-default-3.png';
import banner4 from '../images/cnsa-banner-default-4.png';

const Banner = () => {

    return (
        <section className={styles.sliderContainer}>
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
        </section>
    );
};

export default Banner;