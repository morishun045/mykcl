import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./roommodal.module.css";

type ModalProps = {
    roomname: string;
    grade: string;
    group: string;
    subject: string;
    period: number;
    start: number;
    finish: number;
}

export default function Modal({
    roomname,
    grade,
    group,
    subject,
    period,
    start,
    finish
}: ModalProps) {
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