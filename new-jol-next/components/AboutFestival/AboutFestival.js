import React from 'react'
import clsx from "clsx"
import styles from "../../styles/Home.module.scss"
import AboutFestivalDetail from './AboutFestivalDetail'


const AboutFestival = () => {
    return (
        <>
            <div className=''>
                <div className='row m-0'>
                    <div className='col-lg-12'>
                        <div className={clsx(styles.aboutFes1)}>
                            <h1>About the Festival</h1>
                            <div>
                                <img src='/assests/about-pink-line-img1.svg' alt='about-pink-line-img1' />

                            </div>
                        </div>
                    </div>


                </div>

                <div className={clsx(styles.aboutSection)}>
                    <div className='row m-0 p-0 justify-content-center'>
                        <div className='col-lg-8 col-sm-10'>
                            <div style={{ position: "relative" }} className={clsx(styles.aboutWelcomeDiv)}>
                                <img style={{ width: "100%" }} className='img-fluid' src='/assests/top-logo-rav/about-banner-img.png' alt='about-banner-img' />
                                <img src='/assests/play-icon.svg' alt='play-icon' className={clsx(styles.playIcon2)} />
                                <div  >
                                    <p >Welcome to Ravolution - the ultimate music festival experience brought to you by JOLfest! Get ready to embark on the adventure of a lifetime as we dance, feast, and explore through the hottest festival of the year.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx("container", styles.containerWidth)} >
                    <AboutFestivalDetail />
                </div>

            </div>

        </>
    )
}

export default AboutFestival