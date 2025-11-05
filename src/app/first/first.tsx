"use client";

import { RoomName } from "../components/room";
import Toilet from "../components/toilet";
import Stair from "../components/stairs";
import Eleveter from "../components/eleveter";
import Road from "../components/road";
import styles from "./floor.module.css";
import React, { useState, useEffect } from "react";
import { FloorProps, RoomDetail } from "@/lib/types";
import { checkRoomsStatus } from "@/server/action";

const FLOOR_NUMBER = 1;

export default function First({ selectedDate }: FloorProps) {
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
                <span className={styles.floorName}>講義棟一階</span>
                <p>読み込み中………</p>
            </div>
        )
    }

    const detail1101 = isDetails.find(r => r.roomname === "1101講義室") || null;
    const detail1102 = isDetails.find(r => r.roomname === "1102講義室") || null;
    const detail1103 = isDetails.find(r => r.roomname === "1103講義室") || null;
    const detail1104 = isDetails.find(r => r.roomname === "1104講義室") || null;
    const detail2101 = isDetails.find(r => r.roomname === "2101講義室") || null;
    const detail2102 = isDetails.find(r => r.roomname === "2102講義室") || null;

    return (
        <div className={styles.floor}>
            <span className={styles.floorName}>講義棟一階</span>
            <div className={styles.floorall}>
                <div className={styles.floorleft}>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1102講義室" detail={detail1102} />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1101講義室" detail={detail1101} />
                    </div>
                    <div className={styles.floorContent}>
                        <Stair />
                    </div>
                    <div className={styles.floorContent}>
                        <Road name="通路" />
                    </div>
                    <hr />
                    <div className={styles.floorContent}>
                        <RoomName roomname="2101講義室" detail={detail2101} />
                    </div>
                </div>
                <div className={styles.floorContent}>
                    <Eleveter />
                </div>
                <div className={styles.floorContent}>
                    <Toilet />
                </div>
                <div className={styles.floorContent}>
                    <Road name="ものづくり工房" />
                </div>
                <div className={styles.floorright}>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1104講義室" detail={detail1104} />
                    </div>
                    <div className={styles.floorContent}>
                        <Stair />
                    </div>
                    <div className={styles.floorContent}>
                        <Road name="通路" />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1103講義室" detail={detail1103} />
                    </div>
                    <hr />
                    <div className={styles.floorContent}>
                        <RoomName roomname="2102講義室" detail={detail2102} />
                    </div>
                </div>
            </div>
        </div>
    )
}