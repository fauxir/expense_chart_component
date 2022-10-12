import { useSelector } from "react-redux";

function Mybalance() {

    const balance = useSelector((state) => state.totMoney.value);

    return ( 
        <div>
            {balance}
        </div>
     );
}

export default Mybalance;