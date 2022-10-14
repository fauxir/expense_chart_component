import { useDispatch } from "react-redux";
import { useState } from "react";
import { update } from "/Users/Fauxir/Desktop/CSS-HTML-JS-REACT practice/expense_chart_component/src/redux/totalMoneySlice.js";

function ThisWeekWage() {
  const [moneyInput, setMoneyInput] = useState("");
  const dispatch = useDispatch();

  const handleUpdate = (e) => {   //records money received per week in moneyInput
    dispatch(update(moneyInput));
    console.log(moneyInput)
  };

  return (
    <div className="h-full w-2/4 flex flex-col  justify-center pl-4">
      <input
        onChange={(e) => {
          setMoneyInput(e.target.value);
        }}
        onBlur={() => {
          handleUpdate();
        }}
        className="bg-bridal-heath-500 leading-none rounded-sm shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
        placeholder="This week wage"
      ></input>
    </div>
  );
}

export default ThisWeekWage;
