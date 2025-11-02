import React from "react";
import Link from "next/link";
import styles from "./Header.module.css"

type NaviProps = {
    navilink: string
    title :string
}

export function Navigation({navilink, title}: NaviProps){
    return (
        <div className = {styles.navi}>
            <Link href={navilink} className={styles.link}>
                {title}
            </Link>
        </div>
    )
}