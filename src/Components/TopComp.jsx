import ThisWeekWage from "./ThisWeekWage";
import MyBalance from "./MyBalance";
import { useState } from "react";

function TopComp() {
const [show, setShow] = useState(1);

    return ( 
        <div>top comp
        {!show ? <MyBalance /> : null}
        {show ? <ThisWeekWage /> : null}
        </div>
     );
}

export default TopComp;