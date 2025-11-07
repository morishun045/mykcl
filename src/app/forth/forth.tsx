"use client";

import { RoomName } from "../components/room";
import Toilet from "../components/toilet";
import Stair from "../components/stairs";
import Eleveter from "../components/eleveter"; 
import styles from "../first/floor.module.css";
import React, { useState, useEffect } from "react";
import { FloorProps, RoomDetail } from "@/lib/types";
import { checkRoomsStatus } from "@/server/action";

const FLOOR_NUMBER = 4;

export default function Forth({ selectedDate }: FloorProps) {
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
                <span className={styles.floorName}>講義棟四階</span>
                <p>読み込み中………</p>
            </div>
        )
    }

    const detail1401 = isDetails.find(r => r.roomname === "1401講義室") || null;
    const detail1402 = isDetails.find(r => r.roomname === "1402講義室") || null;
    const detail1403 = isDetails.find(r => r.roomname === "1403講義室") || null;
    const detail1404 = isDetails.find(r => r.roomname === "1404講義室") || null;
    const detail1405 = isDetails.find(r => r.roomname === "1405講義室") || null;
    
    return (
            <div className={styles.floor}>
                <span className={styles.floorName}>講義棟四階</span>
                <div className={styles.floorall}>
                    <div className={styles.floorleft}>
                        <div className={styles.floorContent}>
                            <RoomName roomname="1403講義室" detail={detail1403} />
                        </div>
                        <div className={styles.floorContent}>
                            <RoomName roomname="1402講義室" detail={detail1402} />
                        </div>
                        <div className={styles.floorContent}>
                            <Stair />
                        </div>
                        <div className={styles.floorContent}>
                            <RoomName roomname="1401講義室" detail={detail1401} />
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
                            <RoomName roomname="1404講義室" detail={detail1404} />
                        </div>
                        <div className={styles.floorContent}>
                            <Stair />
                        </div>
                        <div className={styles.floorContent}>
                            <RoomName roomname="1405講義室" detail={detail1405} />
                        </div>
                    </div>
                </div>
            </div>
    )
}