import React from 'react';
import clsx from "clsx";
import styles from "../../styles/Home.module.scss"

const PreButton = () => {
    return (
        <>
            <button className={clsx(styles.preButton)} >Pre-Register Now</button>
        </>

    )
}

export default PreButton