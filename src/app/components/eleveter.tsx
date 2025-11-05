import React from "react";
import styles from "./Room.module.css";
import Image from 'next/image';

export default function Eleveter(){
    return (
        <div className={styles.eleveter}>
            <Image src="/eleveter.jpg" alt="eleveter" height={100} width={70} />
        </div>
    )
}