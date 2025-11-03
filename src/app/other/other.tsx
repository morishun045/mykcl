"use client";

import { RoomName } from "../components/room";
import styles from "../first/floor.module.css";
import React, { useState, useEffect } from "react";
import { FloorProps, RoomDetail } from "@/lib/types";
import { checkRoomsStatus } from "@/server/action";

const FLOOR_NUMBER = 5;

export default function Others({ selectedDate }: FloorProps) {
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
                <span className={styles.floorName}>その他</span>
                <p>読み込み中………</p>
            </div>
        )
    }

    const detailsMILAiS = isDetails.find(r => r.roomname === "MILAiS") || null;
    const detailAV = isDetails.find(r => r.roomname === "AV講義室") || null;
    const detailbaseEx = isDetails.find(r => r.roomname === "基礎実験室") || null;

    return (
        <div>
            <div className={styles.floor}>
                <span className={styles.floorName}>MILAiS</span>
                <div className={styles.floorall}>
                    <div className={styles.floorContent}>
                     <RoomName roomname="MILAiS" detail={detailsMILAiS}/>
                    </div>
                </div>
            </div>
            <div className={styles.floor}>
                <span className={styles.floorName}>AV講義室</span>
                <div className={styles.floorall}>
                    <div className={styles.floorContent}>
                     <RoomName roomname="AV講義室" detail={detailAV}/>
                    </div>
                </div>
            </div>
            <div className={styles.floor}>
                <span className={styles.floorName}>アゴラ</span>
                <div className={styles.floorall}>
                    <div className={styles.floorContent}>
                     <RoomName roomname="基礎実験室" detail={detailbaseEx}/>
                    </div>
                </div>
            </div>
        </div>
    )
}