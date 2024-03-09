import React from 'react'
import styles from '@styles/scss/navbar.module.scss'
import { navLink } from '../../common/constants/contants'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <span className={styles.logo}>SANTHOSH BAKE HOUSE</span>
                </div>
                <div className={styles.center}>
                    {navLink?.map((link, index) => (
                        <div className={styles.linkItem} key={`navlink_item${index}`}>
                            <span className={styles.link}>{link?.title}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.right}>
                    <div className={styles.socialItem} >
                        <span className={styles.link}>Location</span>
                    </div>
                    <div className={styles.socialItem} >
                        <span className={styles.link}>Facebook</span>
                    </div>
                    <div className={styles.socialItem} >
                        <span className={styles.link}>Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
