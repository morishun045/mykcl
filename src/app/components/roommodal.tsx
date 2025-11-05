import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./roommodal.module.css";
import { RoomDetail } from "@/lib/types";


export default function Modal({
    roomname,
    grade,
    group,
    subject,
    period,
    start,
    end
}: RoomDetail) {
    const [isOpenModal, setModalOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleModal = () => {
        setModalOpen(!isOpenModal);
    };

    const triggerButton = (
        <button onClick={toggleModal} className={styles.baseBtn}>
            詳細を見る
        </button>
    );

    const modalContent = (
        <div className={styles.madal}>
            <div className={styles.madalInner}>
                <div className={styles.madalHeader}></div>
                <h2 className={styles.roomname}>
                    {roomname}
                </h2>
                <div className={styles.content}>
                    <ul>
                        <li>
                            学年：{grade}
                        </li>
                        <li>
                            クラス：{group}
                        </li>
                        <li>
                            教科：{subject}
                        </li>
                        <li>
                            時限：{period}［{start}~{end}］
                        </li>
                    </ul>
                    <button onClick={toggleModal} className={styles.baseBtn}>戻る</button>
                </div>
            </div>
        </div>
    );

    if (!isMounted) {
        return triggerButton;
    }

    return (
        <>
            {isOpenModal &&
                ReactDOM.createPortal(
                    modalContent,
                    document.getElementById("modal-portal")!
                )
            }
            {triggerButton}
        </>
    )
}