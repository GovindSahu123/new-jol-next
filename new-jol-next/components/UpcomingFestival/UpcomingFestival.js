

import React from 'react'
import clsx from "clsx";
import styles from "../../styles/Home.module.scss"
const UpcomingFestival = () => {
    return (
        <>
            <div className={clsx('container', styles.containerWidth)}>
                <div className={clsx('row m-0  justify-content-center')}>
                    <div className='col-lg-10'>
                        <div className={clsx(styles.aboutFes1)}>
                            <h1>Our Upcoming festivals</h1>
                            <img src='/assests/about-pink-line-img1.svg' alt='about-pink-line-img1' />
                        </div>
                        <section style={{ marginTop: "45px" }}>
                            <div className={clsx('row m-0 ')}>
                                <div className='col-lg-6 col-md-6'>
                                    <div className={clsx(styles.upGrid1)}>
                                        <img className={clsx('img-fluid', styles.imgFluid)} src='/assests/apress-img/apres-img2.png' alt='apres-img2' />
                                        <img className={clsx('img-fluid', styles.imgFluid, styles.hoverImg)} src='/assests/yellow-circle.svg' alt='yellow-circle' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <div className={clsx(styles.upGrid2)}>
                                        <img className={clsx('img-fluid', styles.imgFluid)} src='/assests/top-logo-rav/logo-rav-1.png' alt='ravalution-music-festival' />
                                        <img className={clsx('img-fluid', styles.imgFluid, styles.hoverImg)} src='/assests/yellow-circle.svg' alt='yellow-circle' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6' >
                                    <div className={clsx(styles.upGrid3)}>
                                        <img className={clsx('img-fluid', styles.imgFluid)} src='/assests/tomland-icon/tomland-icon1.png' alt='tomland' />
                                        <img className={clsx('img-fluid', styles.imgFluid, styles.hoverImg)} src='/assests/yellow-circle.svg' alt='yellow-circle' />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <div className={clsx(styles.upGrid4)}>
                                        <img className={clsx('img-fluid', styles.imgFluid)} src='/assests/moga-icon.svg' alt='moga1' />
                                        <img className={clsx('img-fluid', styles.imgFluid, styles.hoverImg)} src='/assests/yellow-circle.svg' alt='yellow-circle' />
                                    </div>
                                </div>
                            </div>

                        </section>

                    </div>
                </div>
            </div>
        </>

    )
}

export default UpcomingFestival