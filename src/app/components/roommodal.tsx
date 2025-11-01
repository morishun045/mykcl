import React, { useState } from "react";
import styles from "./roommodal.module.css";

type RoomDetail = {
    roomname: string;
    grade: string;
    group: string;
    subject: string;
    period: number;
    start: number;
    finish: number;
}

export default function modal(
    { roomname, grade, group, subject, period, start, finish }: RoomDetail
) {
    const [isOpenModal, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isOpenModal);
    }

    return (
        <>
            <button onClick={toggleModal} className={styles.baseBtn}>詳細を見る</button>
            {isOpenModal && (
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
                                    {group}
                                </li>
                                <li>
                                    {subject}
                                </li>
                                <li>
                                    {period}:{start}~{finish}
                                </li>
                            </ul>
                            <button onClick={toggleModal} className={styles.baseBtn}>戻る</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}