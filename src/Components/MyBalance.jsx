import { useSelector } from "react-redux";

function Mybalance() {

    const balance = useSelector((state) => state.totMoney.value);  //prints money received in top comp 

    return ( 
        <div>
        <span className="text-sambuca-50 ml-3 text-sm">Total received</span>
            <div className="text-sambuca-50 ml-3 font-bold text-xl">£{balance}</div>
        </div>
     );
}

export default Mybalance;