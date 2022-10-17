import { useSelector } from "react-redux";

function ThisMonth() {
  const spent = [useSelector((state) => state.moneySpent.value)];
  const received = [useSelector((state) => state.totMoney.value)];

  let reduxProcess = spent
    .toString()
    .split(",")
    .map((str) => {
      //process redux data
      return Number(str);
    });

  let totalSpent = reduxProcess.reduce((acummVariable, curValue) => {
    //calculate the total value for the array
    return acummVariable + curValue;
  }, 0);

  let calculatePercentage = Math.trunc(100 - (1 / (received / totalSpent)) * 100);

  return (
    <div className="h-fit w-full flex flex-col justify-center items-center mt-4">
      <div className="h-0.5 w-11/12 bg-squirrel-200"></div>
      <div
        className="h-fit w-full flex flex-row items-center justify-between px-4 my-3" /* container*/
      >
        <div className="" /* wrapper */>
          <span>Total this week</span>
          <h1 className="text-base">£{received - totalSpent}</h1>
        </div>
        <div /* wrapper saved */>
          <h1>{calculatePercentage}%</h1>
          <span>total saved</span>
        </div>
      </div>
    </div>
  );
}

export default ThisMonth;
