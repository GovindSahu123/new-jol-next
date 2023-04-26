import React from 'react';
import styles from "../../styles/Home.module.scss";
import clsx from "clsx";
import Link from 'next/link';
const Footer = () => {
    return (
        <>
            <footer style={{ margin: "80px 0px 40px 0px" }}>
                <div className='row m-0 justify-content-center'>
                    <div className='col-xl-5 col-lg-6 col-md-8 col-sm-8'>
                        <div className={clsx(styles.footerLogoDiv)}>
                            <img src='/assests/jol-logo-footer.svg' alt='' />
                            <p>JOL - Partwagon To Music Fest & Spots brand and concept is owned by m/s bholi travelsome service - a private limited company registered in India</p>
                        </div>
                    </div>

                    <div className='col-xl-8 col-lg-10 col-md-11 col-sm-11'>
                        <div className={clsx(styles.privacyDiv)}>
                            <p>{"Privacy & Cookies"}</p>
                            <p>{"Terms & Conditions"}</p>
                            <p>{"How It Works"}</p>
                            <p>{"Contact"}</p>
                            <p>{"Become A Partner"}</p>
                        </div>
                    </div>
                    <hr style={{ borderTop: "2px solid pink" }} />
                    <div className='col-lg-5 col-md-5 col-sm-5 '>
                        <div className={clsx(styles.corporateDiv)}>
                            <h5>Corporate Address</h5>
                            <p>{"M/S Bholi Travelsome Services, 16th Floor - Tower 9A, Cyber City, DLF City, Phase II, Gurgaon - 122002, Haryana (India) Tax (GST/VAT) Number : 03AATFB1075B1ZV Register Of Firms & Societies : 5665/2017-18/22-02-2018"}</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4'>
                        <div className={clsx(styles.corporateDiv)}>
                            <h5>Our Partners</h5>
                            <div style={{ display: "flex", columnGap: "12px" }}>
                                <div>
                                    <img className='img-fluid' src='/assests/img-602/img-602.png' alt='img-602' />
                                </div>

                                <div>
                                    <img className='img-fluid' src='/assests/img-603/img-603.png' alt='img-603' />
                                </div>

                                <div>
                                    <img className='img-fluid' src='/assests/img-604/img-604.png' alt='img-604' />
                                </div>


                            </div>
                            <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                                <div>
                                    <img className='img-fluid' src='/assests/img-605/img-605.png' alt='img-605' />
                                </div>

                                <div>
                                    <img className='img-fluid' src='/assests/img-606/img-606.png' alt='img-606' />
                                </div>
                                <div>
                                    <img className='img-fluid' src='/assests/img-607/img-607.png' alt='img-607' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-3 mt-sm-0 mt-3'>
                        <div className={clsx(styles.corporateDiv)}>
                            <h5>Follow us</h5>
                            <div style={{ display: "flex", columnGap: "12px" }}>
                                <Link href={"#"}> <img className='img-fluid' src='/assests/facebook-icon.svg' alt='facebook-icon' /></Link>
                                <Link href={"#"}>  <img className='img-fluid' src='/assests/twiter-icon.svg' alt='twiter-icon' /></Link>
                                <Link href={"#"}> <img className='img-fluid' src='/assests/insta-icon.svg' alt='insta-icon' /></Link>




                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer