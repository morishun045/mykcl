"use client"

import React from "react";
import styles from "./Room.module.css"
import Modal from "./roommodal";
import { RoomDetail } from "@/lib/types";

type RoomNameProps = {
    roomname: string;
    detail: RoomDetail | null;
}
export function RoomName({ 
    roomname, 
    detail}: 
    RoomNameProps)
    {
    let Content;

    if (detail) {
        Content = (
            <div className={styles.room}>
                <h2 className={styles.roomname}>
                    {roomname}
                </h2>
                <div className={styles.content}>
                    <ul>
                        <li>
                            学年：{detail.grade}
                        </li>
                        <li>
                            教科：{detail.subject}
                        </li>
                    </ul>
                    <Modal roomname={roomname}
                        grade={detail.grade}
                        group={detail.group}
                        subject={detail.subject}
                        period={detail.period}
                        start={detail.start}
                        end={detail.end}>
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
                <div className={styles.contentE}>
                    <span>空き教室</span>
                    <Modal roomname={roomname}
                        grade=""
                        group=""
                        subject=""
                        period={0}
                        start=""
                        end="">
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