import SpendingGraph from "./SpendingGraph";
import ThisMonth from "./ThisMonth";
import WeekInput from "./WeekInput";
import { useState } from "react";

function MainComp() {
const [show, setShow] = useState(1);

    return ( 
        <div className="bg-bridal-heath-500 w-80 h-1/2 rounded-lg flex flex-col items-center justify-center">
            {show ? <WeekInput /> : null}
            {!show ? <SpendingGraph /> : null}
            {!show ? <ThisMonth /> : null}
            {show ? <div className="h-12 w-40 bg-terracotta-600  flex flex-row items-center justify-center rounded-md cursor-pointer ">
            <div className="h-full w-full flex flex-row items-center justify-center hover:bg-terracotta-900 hover:shadow-sambuca-300 hover:shadow-lg ">
            Calculate
            </div>
            </div> : null}
        </div>
     );
}

export default MainComp;