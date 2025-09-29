"use client"

import React, { useState } from "react";
import styles from "./Room.module.css"

type Room = {
    roomname: string;
    grade: string;
    detail: string;
}

export function RoomName({ roomname, grade, detail }: Room) {
    const [isRoomState, setRoomState] = useState(true);
    const [showModal, setShowModal] = useState(false);
    let Content;

    if (isRoomState) {
        Content = (
            <div className={styles.room}>
                <h2 className={styles.roomname}>
                    {roomname}
                </h2>
                <div className={styles.content}>
                    <ul>
                        <li>
                            {grade}
                        </li>
                        <li>
                            {detail}
                        </li>
                    </ul>
                    <button onClick={() => setShowModal(true)} className={styles.baseBtn}>詳細を見る</button>
                </div>
            </div>
        );
    } else {
        Content = (
            <div className={styles.roomEmpty}>
                <h2 className={styles.roomname}>
                    {roomname}
                </h2>
                <div className={styles.content}>
                    <span>空き教室</span>
                    <button onClick={() => setShowModal(true)} className={styles.baseBtn}>詳細を見る</button>
                </div>
            </div>
        );
    }

    let madal;

    if (showModal) {
        madal = (
            <div className={styles.madal}>
                <div className={styles.madalInner}>
                    <div className={styles.madalHeader}></div>
                    <h2 className={styles.roomname}>
                        {roomname}
                    </h2>
                    <div className={styles.content}>
                        <ul>
                            <li>
                                {grade}
                            </li>
                            <li>
                                {detail}
                            </li>
                        </ul>
                        <button onClick={() => setShowModal(false)} className={styles.baseBtn}>戻る</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {Content}
            {/* <button onClick={()=>setRoomState(true)} className={styles.basebutton}>test</button> */}
            {madal}
        </div>
    )
}