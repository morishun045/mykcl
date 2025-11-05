import React from "react";
import styles from "./Room.module.css";
import Image from "next/image";

export default function Stair(){
    return (
        <div className={styles.stair}>
            <Image src="/stair.jpg" alt="stair" height={100} width={70}/>
        </div>
    )
}