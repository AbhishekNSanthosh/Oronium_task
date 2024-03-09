"use client"

import React, { useState } from 'react'
import styles from '@styles/scss/navbar.module.scss'
import { navLink } from '../../common/constants/contants'
import { IoMenu } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link'

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <div className={isDrawerOpen ? styles.containerStyled : styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <span className={styles.logo}>SANTHOSH BAKE HOUSE</span>
                    <div className={styles.moreButton}>
                        {isDrawerOpen ?
                            <div className={styles.box} >
                                <IoMdClose className={styles.icon} onClick={() => {
                                    setIsDrawerOpen(false)
                                }} />
                            </div>
                            :
                            <div className={styles.box} >
                                <IoMenu className={styles.icon} onClick={() => {
                                    setIsDrawerOpen(true)
                                }} />
                            </div>
                        }
                    </div>
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

            {isDrawerOpen &&
                <div className={styles.drawer}>
                    <div className={styles.row}>
                        <div className={styles.resItem}>
                            {navLink?.map((link, index) => (
                                <div className={styles.resLinkItem} key={`navlink_item${index}`}>
                                    <span className={styles.link}>{link?.title}</span>
                                    <IoIosArrowForward />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <SlLocationPin className={styles.socialIcon} />
                        <FaFacebook className={styles.socialIcon} />
                        <FaInstagram className={styles.socialIcon} />
                    </div>

                    <div className={styles.credits}>
                        <span className={styles.credit}>Made with ❤️‍🩹 by <Link className={styles.highlight} target="_blank" href="https://www.linkedin.com/in/abhishek-santhosh/">Abhishek</Link></span>
                    </div>
                </div>
            }
        </div>
    )
}
