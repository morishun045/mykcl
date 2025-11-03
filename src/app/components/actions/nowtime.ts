"use client";

import { useState, useEffect } from "react";

export function useCurrentTime( updateInterval: number = 60000) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeId = setInterval(() => {
            setTime(new Date());
        }, updateInterval);

        return () => clearInterval(timeId);
    }, [updateInterval]);

    return time.toISOString();
}


