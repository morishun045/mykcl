import { Header } from "@/app/components/header"
import { RoomName } from "./components/room";
import First from "./first/first";
import Second from "./second/second";
import Third from "./third/third";
import Forth from "./forth/forth";
import Others from "./other/other";
import styles from "./home.module.css"

const App = () => {
    return (
        <div className={styles.base}>
            <Header title="空き教室チェッカー" />
            <div className={styles.home}>
                <First />
                <Second />
                <Third />
                <Forth />
                <Others />
            </div>
        </div>
    )
};

export default App;