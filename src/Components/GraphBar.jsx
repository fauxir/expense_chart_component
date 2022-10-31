import PriceTagAbove from "./PriceTagAbove";
import { useState } from "react";

function GraphBar(props) {
  const { day, spent, style } = props;

  let [localShow, setLocalShow] = useState(0);

  return (
    <div
      className="flex flex-col justify-center items-center" /* graph container day */
      onMouseOver={() => {
        setLocalShow((localShow = 1));
      }}
      onMouseOut={() => {
        setLocalShow((localShow = 0));
      }}
    >
      {localShow ? <PriceTagAbove spent={spent} /> : null}
      <div /* bar */ className={style/*console.log(style)*/}></div>

      <span>{day}</span>
    </div>
  );
}

export default GraphBar;
