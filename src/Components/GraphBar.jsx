import PriceTagAbove from "./PriceTagAbove";
import { useState } from "react";

function GraphBar(props) {
  const { day, spent, style } = props;

  let [localShow, setLocalShow] = useState(0)

  const showSpentPerDay = () => {
    setLocalShow = localShow ++;
    console.log(localShow)
  };

  const hideSpentPerDay = () => {
    setLocalShow = localShow --;
    console.log(localShow)
  };
  return (
    <div
      className="flex flex-col justify-center items-center" /* graph container day */
      onMouseOver={showSpentPerDay}
      onMouseOut={hideSpentPerDay}
    >
      {localShow ? <PriceTagAbove spent={spent} /> : null}
      <div /* bar */ className={style}></div>

      <span>{day}</span>
    </div>
  );
}

export default GraphBar;
