
import React from 'react'
import clsx from "clsx"
import styles from "../../styles/Home.module.scss"
const PlanTrips = () => {
    return (
        <>
            <section className={clsx(styles.planTripsSection)}>
                <div className='row m-0'>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className={clsx(styles.planLeftDiv)}>
                            <h1>We don't just plan trips - we create a lifestyle</h1>
                            <img src='/assests/rev-pink-line2.svg' alt='rev-pink-line2' />
                            <p>At JOL, we don't just plan trips - we create a lifestyle. We believe that life should be an adventure filled with thrilling experiences, wild parties, and unforgettable memories. That's why we've curated the ultimate travel experience for music lovers around the globe. With JOL, you'll get to explore scenic landscapes, savor exotic cuisines, and dance to the best music festivals with the most electrifying crowd in the world. Our promise is to keep you on your toes as we celebrate life at the hottest festivals, bringing you the ultimate taste of the wild-free life. Join us and experience the ultimate high that JOL has to offer!</p>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className={clsx(styles.planRightDiv)}>
                            <img className='img-fluid' src='/assests/top-logo-rav/plan-trips-dj-img.png' alt='plan-trips-dj-img' />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default PlanTrips