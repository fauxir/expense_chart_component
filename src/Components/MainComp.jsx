import SpendingGraph from "./SpendingGraph";
import ThisMonth from "./ThisMonth";
import WeekInput from "./WeekInput";
import { useState } from "react";

function MainComp() {
const [show, setShow] = useState(1);

    return ( 
        <div className="bg-bridal-heath-500 w-80 h-1/2 rounded-lg flex flex-col items-center justify-between">
            {show ? <WeekInput /> : null}
            {!show ? <SpendingGraph /> : null}
            {!show ? <ThisMonth /> : null}
            {show ? <div className="h-12 w-72 bg-terracotta-600  flex flex-row items-center justify-center rounded-md cursor-pointer  hover:bg-terracotta-500 hover:shadow-sambuca-300 hover:shadow-lg mb-8">
            <div>
            Calculate
            </div>
            </div> : null}
        </div>
     );
}

export default MainComp;