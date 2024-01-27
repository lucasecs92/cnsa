
import styles from '../css/Banner.module.css';

import banner1 from '../images/cnsa-banner-default.png';

const Banner = () => {

    return (
        <>
            <section className={styles.containerBanner}>
                <img src={banner1} alt="banner logo" />
            </section>
        </>
    )
}

export default Banner; 