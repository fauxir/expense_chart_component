import { useSelector } from "react-redux";
import GraphBar from "./GraphBar";

function SpentPerDay() {
  const spent = [useSelector((state) => state.moneySpent.value)];
  const received = [useSelector((state) => state.totMoney.value)];

  let reduxProcess = spent
    .toString()
    .split(",")
    .map((str) => {
      //process redux data aka array with money spent per day
      return Number(str);
    });

  let days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

  let style = "w-6 bg-terracotta-500 rounded-sm hover:bg-neptune-500 h-"; //style for graph bar

  let id = [1, 2, 3, 4, 5, 6, 7];

  const height = [0, 2, 4, 6, 8, 9, 12, 16, 20, 24];

  let calculcatePercentage = () => { //calculate style heights array
    let finalArray = [];
    reduxProcess.forEach((element) => {
      let percentage = Math.trunc((1 / (received / element)) * 100);

      if (percentage === 0) {
        finalArray.push(style + height[0]);
      } else if (percentage > 10 && percentage <= 90) {
        finalArray.push(style + height[Math.floor(percentage / 10)]);
      } else if (percentage > 0 && percentage < 10) {
        finalArray.push(style + height[Math.floor(percentage / 10) + 1]);
      } else if (percentage > 90) {
        finalArray.push(style + height[9]);
      }
    });
    return finalArray;
  };

  let arrayStyles = calculcatePercentage();

  const dayIncome = id.map((id, index) => {
    //convert all data arrays to object to be passed to GraphBar comp
    let dataObj = {};
    dataObj.id = id;
    dataObj.day = days[index];
    dataObj.style = arrayStyles[index];
    dataObj.spent = reduxProcess[index];
    return dataObj;
  });

  return (
    <div className="w-full flex items-end h-fit mt-6">
      <div className="flex flex-row items-end justify-around w-full h-fit">
        {dayIncome.map((props) => {
          return (
            <GraphBar
              key={props.id}
              day={props.day}
              spent={props.spent}
              style={props.style}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpentPerDay;
