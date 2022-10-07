import ThisWeekWage from "./ThisWeekWage";
import MyBalance from "./MyBalance";
import { useState } from "react";

function TopComp() {
  const [show, setShow] = useState(1);

  return (
    <div className="bg-terracotta-500 h-20 w-1/4">
      {!show ? <MyBalance /> : null}
      {show ? <ThisWeekWage /> : null}
    </div>
  );
}

export default TopComp;
