"use client";

import { Header } from "../components/header";
import Third from "./third";
import { useCurrentTime } from "../components/actions/nowtime";

export default function ThirdFloor(){
    const selectedDate = useCurrentTime();
    return (
        <div>
            <Header title="空き教室チェッカー3階"/>
            <Third selectedDate={ selectedDate }/>
        </div>
    )
}