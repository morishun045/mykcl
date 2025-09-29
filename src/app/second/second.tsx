import { RoomName } from "../components/room";
import { Header } from "../components/header";
import Toilet from "../components/toilet";
import Stair from "../components/stairs";
import Eleveter from "../components/eleveter";
import Road from "../components/road";
import styles from "../first/floor.module.css";

export default function Second() {
    return (
        <div className={styles.floor}>
            <span className={styles.floorName}>講義棟二階</span>
            <div className={styles.floorall}>
                <div className={styles.floorleft}>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1201講義室" grade="" detail="" />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1202講義室" grade="" detail="" />
                    </div>
                    <div className={styles.floorContent}>
                        <Stair />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1203講義室" grade="" detail="" />
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
                        <RoomName roomname="1204講義室" grade="" detail="" />
                    </div>
                    <div className={styles.floorContent}>
                        <Stair />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1205講義室" grade="" detail="" />
                    </div>
                </div>
            </div>
        </div>
    )
}