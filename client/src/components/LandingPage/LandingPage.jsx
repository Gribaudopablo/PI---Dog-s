import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import styles from '../LandingPage/LandingPage.module.css'

export default function LandingPage(){
    return(
        <Fragment>
            <div className={styles.back}>
                <h1 className={styles.title}>Welcome To Dogland</h1>
                <Link to='/home'>
                    <button className={styles.Button}>Let's Go</button>
                </Link>
            </div>
        </Fragment>
    )
}