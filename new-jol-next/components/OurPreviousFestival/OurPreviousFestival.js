import React, { useState } from 'react'
import clsx from 'clsx'
import styles from "../../styles/Home.module.scss"

const OurPreviousFestival = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <>
            <div className={clsx(styles.aboutFes1)}>
                <h1>Our Previous Festivals</h1>
                <img src='/assests/about-pink-line-img1.svg' alt='about-pink-line-img1' />
            </div>

            <div >
                <>
                    <ul className={clsx("nav nav-tabs", styles.ulTab)} id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button

                                className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected={activeTab === 1}
                                onClick={() => handleTabClick(1)}
                                style={{ border: "none", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center" }}
                            >
                                <img src='/assests/exit-tab/exit-tab1.png' alt='exit-tab1' />
                                {activeTab === 1 && <img style={{ marginTop: "9px" }} src='/assests/yellow-line-icon.svg' alt='exit-tab1' />}
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected={activeTab === 2}
                                onClick={() => handleTabClick(2)}
                                style={{ border: "none", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center" }}

                            >
                                <img src='/assests/color-tab/color-tab1.png' alt='color-tab1' />
                                {activeTab === 2 && <img style={{ marginTop: "9px" }} src='/assests/yellow-line-icon.svg' alt='exit-tab1' />}
                            </button>
                        </li>

                    </ul>


                    <div style={{ marginTop: "50px" }} className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                        >
                            <div className='row m-0'>
                                <div className='col-lg-8 col-sm-8 p-0'>
                                    <div className={clsx(styles.prevDiv)}>
                                        <img src='/assests/previous-img1/prev-img1.png' alt='prev-img1' />
                                        <img src='/assests/play-icon.svg' alt='play-icon' className={clsx(styles.playIcon)} />
                                    </div>
                                </div>

                                <div className='col-lg-4 col-sm-4 col-6 p-0'>
                                    <div className={clsx(styles.prevDiv)}>
                                        <img src='/assests/previous-img2/prev-img2.png' alt='prev-img2' />
                                    </div>
                                </div>

                                <div className='col-lg-4 col-sm-4 col-6  p-0' >
                                    <div className={clsx(styles.prevDiv)}>
                                        <img src='/assests/previous-img3/prev-img3.png' alt='prev-img3' />
                                    </div>
                                </div>

                                <div className='col-lg-4 col-sm-4 col-6   p-0'>
                                    <div className={clsx(styles.prevDiv)}>
                                        <img src='/assests/previous-img4/prev-img4.png' alt='prev-img4' />
                                    </div>
                                </div>

                                <div className='col-lg-4 col-sm-4 col-6  p-0'>
                                    <div className={clsx(styles.prevDiv)}>
                                        <img src='/assests/previous-img5/prev-img5.png' alt='prev-img5' />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                        >
                            <div className='row m-0'>
                                <div className='col-lg-8 col-sm-8 p-0'>
                                    <div className={clsx(styles.prevDiv)}>
                                        <img src='/assests/previous-img1/prev-img1.png' alt='prev-img1' />
                                        <img src='/assests/play-icon.svg' alt='play-icon' className={clsx(styles.playIcon)} />
                                    </div>
                                </div>

                                <div className='col-lg-4 col-sm-4 col-6 p-0'>
                                    <div className={clsx(styles.prevDiv)}>
                                        <img src='/assests/previous-img2/prev-img2.png' alt='prev-img2' />
                                    </div>
                                </div>

                                <div className='col-lg-4 col-sm-4 col-6  p-0' >
                                    <div className={clsx(styles.prevDiv)}>
                                        <img src='/assests/previous-img3/prev-img3.png' alt='prev-img3' />
                                    </div>
                                </div>

                                <div className='col-lg-4 col-sm-4 col-6   p-0'>
                                    <div className={clsx(styles.prevDiv)}>
                                        <img src='/assests/previous-img4/prev-img4.png' alt='prev-img4' />
                                    </div>
                                </div>

                                <div className='col-lg-4 col-sm-4 col-6  p-0'>
                                    <div className={clsx(styles.prevDiv)}>
                                        <img src='/assests/previous-img5/prev-img5.png' alt='prev-img5' />
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>



                </>

            </div>

        </>
    )
}

export default OurPreviousFestival