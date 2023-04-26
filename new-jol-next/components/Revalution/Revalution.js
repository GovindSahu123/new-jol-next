import React from 'react'
import clsx from "clsx"
import styles from "../../styles/Home.module.scss"
const Revalution = () => {
    return (
        <>
            <section style={{ marginTop: "160px" }}>
                <div className='row m-0 justify-content-center'>
                    <div className='col-lg-10 col-md-10 col-sm-10 '>
                        <div className={clsx(styles.grayLineDiv)} style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "40px" }}>
                            <img className={clsx(styles.grayLine)} style={{ maxWidth: "40%" }} src='/assests/revalution-line1.svg' alt='revalution-line1' />
                            <img style={{ marginTop: "-86px" }} className='img-fluid' src='/assests/top-logo-rav/logo-rav-1.png' alt='logo-rav-1' />
                            <img className={clsx(styles.grayLine)} style={{ maxWidth: "40%" }} src='/assests/rev-line-2.svg' alt='revalution-line2' />
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-4'>
                        <div className={clsx(styles.ravPikDanceImgDiv)} style={{ marginTop: "40px", display: "flex", justifyContent: "flex-end" }}>
                            <img src='/assests/pink-dance-img.svg' alt='pink-dance-img' className='img-fluid' />
                        </div>
                    </div>

                    <div className='col-lg-8 col-md-8 col-sm-8'>
                        <div style={{ marginTop: "60px", padding: "0px 0px 0px 25px" }} className={clsx(styles.revalutionDiv)}>
                            <h1>RAVOLUTION FESTIVAL </h1>
                            <p>VIETNAM ROUTE, DECEMBER 2023</p>
                            <p className={clsx(styles.dataPara)} style={{ marginBottom: "0px" }} >2nd Dec - 6th Dec 2023</p>

                            <div className='row m-0'>
                                <div className='col-xl-8 col-lg-10 col-md-11 p-0'>
                                    <div className={clsx(styles.ravpink2)} style={{ display: "flex", justifyContent: "flex-end", margin: "10px 0px 10px 0px" }}>
                                        <img src='/assests/rev-pink-line2.svg' alt='pink-dance-img' className='img-fluid' />
                                    </div>

                                </div>
                            </div>


                            <button  >Pre-Register Now</button>
                        </div>
                    </div>

                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
                            <img style={{ maxWidth: "-webkit-fill-available" }} src='/assests/rav-gray-line.svg' alt='rav-gray-line' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Revalution