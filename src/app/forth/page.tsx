"use client";

import { Header } from "../components/header";
import Forth from "./forth";
import { useCurrentTime } from "../components/actions/nowtime";

export default function ForthFloor(){
    const selectedDate = useCurrentTime();
    return (
        <div>
            <Header title="空き教室チェッカー4階"/>
            <Forth selectedDate={selectedDate}/>
        </div>
    )
}