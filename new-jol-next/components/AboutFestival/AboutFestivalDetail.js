
import React from 'react'
import clsx from "clsx"
import styles from "../../styles/Home.module.scss"
const AboutFestivalDetail = () => {
    return (
        <>
            <section className={clsx(styles.planTripsSection)}>
                <div className='row m-0'>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className={clsx(styles.planRightDiv)}>
                            <img className='img-fluid' src='/assests/about-detail-img1/about-festival-img1.png' alt='about-festival-img1' />
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6 d-none d-sm-block'>
                        <div className={clsx(styles.planLeftDiv)}>
                            <p>Our carefully curated lineup features the best of the best in the music industry, from chart-topping artists to rising stars that will blow your mind. With JOLfest, you'll have access to the most electrifying crowd in the world, surrounded by people who share your passion for music, travel, and adventure.</p>
                            <p>But Ravolution is not just about music - it's a celebration of life. From scenic landscapes to exotic cuisines, you'll have the opportunity to explore and indulge in the best that the festival has to offer. And with JOLfest, you'll have access to premium accommodations and transportation, making your journey seamless and stress-free.</p>
                            <p>But hurry - spots are limited, and Ravolution is not an experience you want to miss. Book your spot now and get ready to join the revolution with JOLfest!</p>


                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}

export default AboutFestivalDetail