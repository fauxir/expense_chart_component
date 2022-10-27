import { useSelector } from "react-redux";
import GraphBar from "./GraphBar";

function SpentPerDay() {
  const spent = [useSelector((state) => state.moneySpent.value)];

  let reduxProcess = spent
    .toString()
    .split(",")
    .map((str) => {
      //process redux data aka array with money spent per day
      return Number(str);
    });

  let days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

  let id = [1, 2, 3, 4, 5, 6, 7];

  const dayIncome = id.map((id, index) => { //convert all data to object to be passed
    let dataObj = {};
    dataObj.id = id;
    dataObj.day = days[index];
    dataObj.spent = reduxProcess[index];
    return dataObj;
  });

  const height = [0, 2, 4, 6, 8, 9, 12, 16, 20, 24];

  const styleHeight = "w-6 bg-terracotta-500 rounded-sm hover:bg-neptune-500 h-" + height; //test height variable

  return (
    <div className="w-full flex items-end h-fit mt-6">
      <div className="flex flex-row items-end justify-around w-full h-fit">
        {dayIncome.map((props) => {
          return (
            <GraphBar key={props.id} day={props.day} spent={props.spent} />
          );
        })}

        {/*<div
          className="flex flex-col justify-center items-center"
        >
          <div
            className="w-6 h-16 bg-terracotta-500 rounded-sm hover:bg-neptune-500"
          ></div>
          <span>sun</span>
        </div>*/}
      </div>
    </div>
  );
}

export default SpentPerDay;
