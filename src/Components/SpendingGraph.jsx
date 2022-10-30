import SpentPerDay from "./SpentPerDay";

function SpendingGraph() {
    return ( 
        <div className="w-full px-3">
            <h1 className="my-3 ml-2 text-xl font-bold">Spending - Last 7 days</h1>
            <SpentPerDay />
        </div>
     );
}

export default SpendingGraph;