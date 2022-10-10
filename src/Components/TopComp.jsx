import ThisWeekWage from "./ThisWeekWage";
import MyBalance from "./MyBalance";
import { useState } from "react";

function TopComp() {
  const [show, setShow] = useState(1); //needs to be linked to setShow from main comp

  return (
    <div className="bg-terracotta-500 h-20 w-80 mb-6 rounded-lg flex flex-row items-center justify-between">
      {!show ? <MyBalance /> : null}
      {show ? <ThisWeekWage /> : null}
      <div className="h-full w-1/4 flex flex-row items-center justify-center pr-4">
        <div className=" flex flex-row items-center justify-center">
          <div className="w-9 h-9 rounded-full border-2 border-bridal-heath-500 relative left-2 z-10"></div>
          <div className="w-9 h-9 rounded-full border-2 border-sambuca-500 bg-sambuca-500 right-2 relative"></div>
        </div>
      </div>
    </div>
  );
}

export default TopComp;
