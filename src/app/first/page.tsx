"use client";

import { Header } from "../components/header";
import First from "./first";
import { useCurrentTime } from "../components/actions/nowtime";

export default function FirstFloor(){

    const selectedDate = useCurrentTime();
    return (
        <div>
            <Header title="空き教室チェッカー1階"/>
            <First selectedDate={selectedDate}/>
        </div>
    )
}