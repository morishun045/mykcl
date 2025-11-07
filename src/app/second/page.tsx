"use client";

import { Header } from "../components/header";
import Second from "./second";
import { useCurrentTime } from "../components/actions/nowtime";
export default function SecondFloor(){
    const selectedDate = useCurrentTime();

    return (
        <div>
            <Header title="空き教室チェッカー2階"/>
            <Second selectedDate={ selectedDate }/>
        </div>
    )
}