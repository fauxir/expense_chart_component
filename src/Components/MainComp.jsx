import SpendingGraph from "./SpendingGraph";
import ThisMonth from "./ThisMonth";
import WeekInput from "./WeekInput";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux" 
import { appear, disapear } from "/Users/Fauxir/Desktop/CSS-HTML-JS-REACT practice/expense_chart_component/src/redux/showSlice"


function MainComp() {
  
  const [values, setValues] = useState({ placeholder: "" });
  const see = useSelector(state => state.show.value)
  const dispatch = useDispatch();
  const onChange = (e) => {
    setValues({...values, [e.target.placeholder]: e.target.value})
  }


  const inputs = [
    { placeholder: "Spent Monday", id: 1 },
    { placeholder: "Spent Tuesday", id: 2 },
    { placeholder: "Spent Wednesday", id: 3 },
    { placeholder: "Spent Thursday", id: 4 },
    { placeholder: "Spent Friday", id: 5 },
    { placeholder: "Spent Saturday", id: 6 },
    { placeholder: "Spent Sunday", id: 7 },
  ];

  return (
    <div className="bg-bridal-heath-500 w-80 h-fit rounded-lg flex flex-col items-center justify-between">
      {!see
        ? inputs.map((input) => <WeekInput key={input.id} {...input} onClick={onChange}/>)
        : null}
      {see ? <SpendingGraph /> : null}
      {see ? <ThisMonth /> : null}
      {!see ? (
        <div onClick={() => dispatch(appear())} className="h-12 w-72 bg-terracotta-600  flex flex-row items-center justify-center rounded-md cursor-pointer mt-6 hover:bg-terracotta-500 hover:shadow-sambuca-300 hover:shadow-lg mb-8">
          <div>Calculate</div>
        </div>
      ) : null}
    </div>
  );
}

export default MainComp;
