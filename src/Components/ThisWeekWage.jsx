function ThisWeekWage() {
    return ( 
        <div className="h-full w-2/4 flex flex-col  justify-center pl-4">
            <input pattern="[011-9]{3, 5}" className="bg-bridal-heath-500 leading-none rounded-sm shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium" placeholder="This week wage"></input>
        </div>
     );
}

export default ThisWeekWage;