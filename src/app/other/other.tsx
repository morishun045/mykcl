import { RoomName } from "../components/room";
import { Header } from "../components/header";
import Toilet from "../components/toilet";
import Stair from "../components/stairs";
import Eleveter from "../components/eleveter"; 
import Road from "../components/road";
import styles from "../first/floor.module.css";

export default function Others() {
    return (
        <div>
            <div className={styles.floor}>
                <span className={styles.floorName}>MILAiS</span>
                <div className={styles.floorall}>
                    <div className={styles.floorContent}>
                     <RoomName roomname="MILAiS" grade="" detail=""/>
                    </div>
                </div>
            </div>
            <div className={styles.floor}>
                <span className={styles.floorName}>AV講義室</span>
                <div className={styles.floorall}>
                    <div className={styles.floorContent}>
                     <RoomName roomname="AV講義室" grade="" detail=""/>
                    </div>
                </div>
            </div>
            <div className={styles.floor}>
                <span className={styles.floorName}>アゴラ</span>
                <div className={styles.floorall}>
                    <div className={styles.floorContent}>
                     <RoomName roomname="アゴラ" grade="" detail=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}