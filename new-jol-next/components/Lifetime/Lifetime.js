import React from 'react'
import clsx from 'clsx'
import styles from "../../styles/Home.module.scss"
import PreButton from '../Common/PreButton'
const Lifetime = () => {
    return (
        <>
            <div style={{ padding: "80px 0px" }} className={clsx(styles.containerWidth, "container")}>
                <div className='row m-0 justify-content-center'>
                    <div className='col-xl-10 col-lg-11'>
                        <div className={styles.liftUp} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <h1>Don't miss out on the adventure of a lifetime</h1>
                            <img src='/assests/cyan-line-img.svg' alt='cyan-line-img' />
                        </div>
                    </div>

                    <div className='col-xl-6  col-lg-8' >
                        <div className={styles.liftDown} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <p>Book your spot now and join us for the ultimate music festival experience with JOLfest!</p>
                            <PreButton />

                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Lifetime