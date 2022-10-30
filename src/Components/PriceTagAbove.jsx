import React from "react";

function PriceTagAbove(props) {

    let {spent} = props
    return ( 
        <React.Fragment>
        <div className="bg-sambuca-900 text-sambuca-50 rounded mb-2 p-1 text-sm font-semibold">£{spent}</div>
        </React.Fragment>
     );
}

export default PriceTagAbove;