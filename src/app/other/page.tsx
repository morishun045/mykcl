"use client";

import { Header } from "../components/header";
import Others from "./other";
import { useCurrentTime } from "../components/actions/nowtime";

export default function OtherFloor(){
    const selectedDate = useCurrentTime();
    return (
        <div>
            <Header title="空き教室チェッカーその他"/>
            <Others selectedDate={selectedDate}/>
        </div>
    )
}