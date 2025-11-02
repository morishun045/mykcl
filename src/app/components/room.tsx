"use client"

import React, { useState } from "react";
import styles from "./Room.module.css"
import Modal from "./roommodal";

type RoomDetail = {
    roomname: string;
    grade: string;
    group: string;
    subject: string;
    period: number;
    start: number;
    finish: number;
}

export function RoomName({ roomname, grade, group, subject, period, start, finish }: RoomDetail) {
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
                    <Modal roomname={roomname}
                        grade={grade}
                        group={group}
                        subject={subject}
                        period={period}
                        start={start}
                        finish={finish}>
                    </Modal>
                </div>
            </div >
        );
    } else {
        Content = (
            <div className={styles.roomEmpty}>
                <h2 className={styles.roomname}>
                    {roomname}
                </h2>
                <div className={styles.content}>
                    <span>空き教室</span>
                    <Modal roomname={roomname}
                        grade={grade}
                        group={group}
                        subject={subject}
                        period={period}
                        start={start}
                        finish={finish}>
                    </Modal>
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