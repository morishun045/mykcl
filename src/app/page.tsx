"use client";

import { Header } from "@/app/components/header"
import First from "./first/first";
import Second from "./second/second";
import Third from "./third/third";
import Forth from "./forth/forth";
import Others from "./other/other";
import styles from "./home.module.css"
import { useCurrentTime } from "./components/actions/nowtime";

const App = () => {
    const selectedDate = useCurrentTime();

    return (
        <div className={styles.base}>
            <Header title="空き教室チェッカー" />
            <div className={styles.home}>
                <First selectedDate={selectedDate} />
                <Second selectedDate={selectedDate} />
                <Third selectedDate={selectedDate} />
                <Forth selectedDate={selectedDate} />
                <Others selectedDate={selectedDate} />
            </div>
        </div>
    )
};

export default App;