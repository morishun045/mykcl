import React from "react";
import styles from "./Room.module.css";
import Image from 'next/image'

export default function Toilet(){
    return (
        <div className={styles.toilet}>
            <img src="/toilet.png" alt="toilet" />
        </div>
    )
}