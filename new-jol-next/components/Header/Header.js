import Link from 'next/link'
import React from 'react'
import styles from "../../styles/Home.module.scss"
import clsx from "clsx"
const Header = () => {
    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-lg-auto" href="#">
                        <img src='/assests/jol-logo.svg' alt='logo' className='img-fluid' />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <img src='/assests/collapse-icon/collapse-icon.png' alt='logo' className='img-fluid' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className={clsx("nav-link linkTag")} href="#">
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={clsx("nav-link linkTag")} href="#">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={clsx("nav-link linkTag")} href="#">
                                    How It Works
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={clsx("nav-link linkTag")} href="#">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex align-items-lg-center  align-items-start flex-lg-row flex-column" style={{ columnGap: "12px" }}>
                            <button className="btn nav-login-btn me-2 p-0" type="button">
                                Log In
                            </button>
                            <button className="btn  nav-destination-btn mt-lg-0 mt-3 mb-lg-0 mb-3" type="button">
                                Destinations
                            </button>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header