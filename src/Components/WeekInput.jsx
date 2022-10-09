function WeekInput() {
    return ( 
        <div className="h-8 w-2/4 flex flex-col  justify-center mt-4">
        <input pattern="[0-9]{3}" className="bg-bridal-heath-500 leading-none rounded-sm shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium border-sambuca-300 border-2" placeholder="Spent Monday"></input>
        </div>
     );
}

export default WeekInput;