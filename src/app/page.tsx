import {Header} from "@/app/components/header"
import { RoomName } from "./components/room";
import First from "./first/first";
import Second from "./second/second";
import Third from "./third/third";
import Forth from "./forth/forth";
import Others from "./other/other";

const App = () => {
    return (
        <div>
            <Header title="空き教室チェッカー"/>
            <First/>
            <Second/>
            <Third/>
            <Forth/>
            <Others/>

        </div>
    )
};

export default App;