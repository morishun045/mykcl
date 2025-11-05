import React from "react";
import styles from "./Room.module.css";
import Image from 'next/image'

export default function Toilet(){
    return (
        <div className={styles.toilet}>
            <Image src="/toilet.png" alt="toilet" height={100} width={70} />
        </div>
    )
}