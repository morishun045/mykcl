import React from "react";
import styles from "./Room.module.css";
import Image from 'next/image'

type RoadPops = {
    name: string
}
export default function Road({name}: RoadPops){
    return (
        <div className={styles.road}>
            <span>{name}</span>
        </div>
    )
}