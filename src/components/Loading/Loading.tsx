// components/Loading.js
import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {

    return (
        <div className={styles.loadingContainer}>
            <div className={styles.companyName}><p className="text-5xl  font-extrabold md:text-9xl sm:text-7xl">WITCLUB</p></div>
        </div>
    );
};

export default Loading;
