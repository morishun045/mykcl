import React from "react";
import styles from "./Room.module.css";
import Image from 'next/image'

export default function Eleveter(){
    return (
        <div className={styles.eleveter}>
            <img src="/eleveter.jpg" alt="eleveter" />
        </div>
    )
}