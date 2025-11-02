import { RoomName } from "../components/room";
import Toilet from "../components/toilet";
import Stair from "../components/stairs";
import Eleveter from "../components/eleveter";
import Road from "../components/road";
import styles from "./floor.module.css";
import { getRoomInfo } from "@/server/action";

export default async function First() {
    const roomInfo = await getRoomInfo();
    console.log(roomInfo);

    return (
        <div className={styles.floor}>
            <span className={styles.floorName}>講義棟一階</span>
            <div className={styles.floorall}>
                <div className={styles.floorleft}>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1101講義室" grade="" detail="" />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1102講義室" grade="" detail="" />
                    </div>
                    <div className={styles.floorContent}>
                        <Stair />
                    </div>
                    <div className={styles.floorContent}>
                        <Road name="通路" />
                    </div>
                    <hr />
                    <div className={styles.floorContent}>
                        <RoomName roomname="2101講義室" grade="" detail="" />
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
                        <RoomName roomname="1103講義室" grade="" detail="" />
                    </div>
                    <div className={styles.floorContent}>
                        <Stair />
                    </div>
                    <div className={styles.floorContent}>
                        <Road name="通路" />
                    </div>
                    <div className={styles.floorContent}>
                        <RoomName roomname="1104講義室" grade="" detail="" />
                    </div>
                    <hr />
                    <div className={styles.floorContent}>
                        <RoomName roomname="2102講義室" grade="" detail="" />
                    </div>
                </div>
            </div>
        </div>
    )
}