"use client";

import { RoomName } from "../components/room";
import Toilet from "../components/toilet";
import Stair from "../components/stairs";
import Eleveter from "../components/eleveter";
import styles from "../first/floor.module.css";
import React, { useState, useEffect } from "react";
import { FloorProps, RoomDetail } from "@/lib/types";
import { checkRoomsStatus } from "@/server/action";

const FLOOR_NUMBER = 3;

export default function Third({ selectedDate }: FloorProps) {
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
                <span className={styles.floorName}>講義棟三階</span>
                <p>読み込み中………</p>
            </div>
        )
    }

    const detail1301 = isDetails.find(r => r.roomname === "1301講義室") || null;
    const detail1302 = isDetails.find(r => r.roomname === "1302講義室") || null;
    const detail1303 = isDetails.find(r => r.roomname === "1303講義室") || null;
    const detail1304 = isDetails.find(r => r.roomname === "1304講義室") || null;
    const detail1305 = isDetails.find(r => r.roomname === "1305講義室") || null;
    
    
    return (
        <div className={styles.floor}>
            <span className={styles.floorName}>講義棟三階</span>
            <div className={styles.floorall}>
                <div className={styles.floorleft}>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1301講義室" detail={detail1301} />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1302講義室" detail={detail1302} />
                    </div>
                    <div className={styles.floorContent}>
                        <Stair />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1303講義室" detail={detail1303} />
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
                        <RoomName roomname="1304講義室" detail={detail1304} />
                    </div>
                    <div className={styles.floorContent}>
                        <Stair />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1305講義室" detail={detail1305} />
                    </div>
                </div>
            </div>
        </div>

    )
}