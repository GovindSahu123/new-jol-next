import React from 'react'
import clsx from "clsx"
import styles from "../../styles/Home.module.scss"
import PreButton from '../Common/PreButton'

const RevalutionFestival = () => {
    return (
        <>
            <div className='container'>
                <div className='row m-0'>
                    <div className='col-xl-6 col-lg-9'>
                        <div className={clsx(styles.revFesHeading)}>
                            <h1>Ravolution Festival Vietnam Route December 2023</h1>
                            <img src='/assests/rev-festival-pink.svg' alt='rev-festival-pink' />
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className={clsx(styles.revFesPara)} >
                            <p>Are you ready to experience the ultimate music festival with JOL? We are thrilled to announce that pre-booking for the next big event is now open! Be one of the first to secure your spot and get ready to embark on the adventure of a lifetime. With JOL, you'll have access to the hottest festivals around the world, surrounded by the most amazing people, and enjoy the wildest parties. Don't wait any longer - book your spot now and get ready to dance, feast, and explore with JOL!</p>
                            <PreButton />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default RevalutionFestival