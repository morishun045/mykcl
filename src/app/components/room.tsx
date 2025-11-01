"use client"

import React, { useState } from "react";
import styles from "./Room.module.css"


type Room = {
    roomname: string;
    grade: string;
    subject: string;
}

export function RoomName({ roomname, grade, subject }: Room) {
    const [isRoomState, setRoomState] = useState(false);
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
                            {subject}
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


    return (
        <div>
            {Content}
            {/* <button onClick={()=>setRoomState(true)} className={styles.basebutton}>test</button> */}
        </div>
    )
}