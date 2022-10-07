import SpendingGraph from "./SpendingGraph";
import ThisMonth from "./ThisMonth";
import WeekInput from "./WeekInput";
import { useState } from "react";

function MainComp() {
const [show, setShow] = useState(1);

    return ( 
        <div className="bg-bridal-heath-500 w-32 h-32">
            {show ? <WeekInput /> : null}
            {!show ? <SpendingGraph /> : null}
            {!show ? <ThisMonth /> : null}
            {show ? <div>CalculateBtn</div> : null}
        </div>
     );
}

export default MainComp;