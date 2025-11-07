"use client";

import { RoomName } from "../components/room";
import Toilet from "../components/toilet";
import Stair from "../components/stairs";
import Eleveter from "../components/eleveter";
import styles from "../first/floor.module.css";
import React, { useState, useEffect } from "react";
import { FloorProps, RoomDetail } from "@/lib/types";
import { checkRoomsStatus } from "@/server/action";


const FLOOR_NUMBER = 2;

export default function Second({ selectedDate }: FloorProps) {
    const [isDetails, setDetails] = useState<RoomDetail[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStairStatus = async () => {
            if (!selectedDate) {
                return;
            }
            const details = await checkRoomsStatus(FLOOR_NUMBER, selectedDate);

            setDetails(details);
            setLoading(false);
        };

        fetchStairStatus();
    }, [selectedDate]);

    if (isLoading) {
        return (

            <div className={styles.floor}>
                <span className={styles.floorName}>講義棟二階</span>
                <p>読み込み中………</p>
            </div>
        )
    }

    const detail1201 = isDetails.find(r => r.roomname === "1201講義室") || null;
    const detail1202 = isDetails.find(r => r.roomname === "1202講義室") || null;
    const detail1203 = isDetails.find(r => r.roomname === "1203講義室") || null;
    const detail1204 = isDetails.find(r => r.roomname === "1204講義室") || null;
    const detail2201 = isDetails.find(r => r.roomname === "2201講義室") || null;
    
    return (
        <div className={styles.floor}>
            <span className={styles.floorName}>講義棟二階</span>
            <div className={styles.floorall}>
                <div className={styles.floorleft}>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1202講義室" detail={detail1202}/>
                    </div>
                    <div className={styles.floorContent}>
                        <Stair />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1201講義室" detail={detail1201}/>
                    </div>
                </div>
                <div className={styles.floorContent}>
                    <Eleveter />
                </div>
                <div className={styles.floorContent}>
                    <Toilet />
                </div>
                <div className={styles.floorright}>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1204講義室" detail={detail1204}/>
                    </div>
                    <div className={styles.floorContent}>
                        <Stair />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1203講義室" detail={detail1203}/>
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="2201講義室" detail={detail2201}/>
                    </div>
                </div>
            </div>
        </div>
    )
}