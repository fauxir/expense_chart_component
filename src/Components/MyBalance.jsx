import { useSelector } from "react-redux";

function Mybalance() {

    const balance = useSelector((state) => state.totMoney.value);  //prints money received in top comp 

    return ( 
        <div>
            {balance}
        </div>
     );
}

export default Mybalance;