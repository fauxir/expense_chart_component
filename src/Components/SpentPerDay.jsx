function SpentPerDay() {
  return (
    <div className="w-full flex items-end h-fit mt-6">
      <div className="flex flex-row items-end justify-around w-full h-fit">
        <div className="flex flex-col justify-center items-center" /* graph container day */>
          <div /* bar */ className="w-6 h-24 bg-terracotta-500 rounded-sm hover:bg-neptune-500"></div>
          <span>mon</span>
        </div>
        <div className="flex flex-col justify-center items-center" /* graph container day */>
          <div /* bar */ className="w-6 h-4 bg-terracotta-500 rounded-sm hover:bg-neptune-500"></div>
          <span>tue</span>
        </div>
        <div className="flex flex-col justify-center items-center" /* graph container day */>
          <div /* bar */ className="w-6 h-4 bg-terracotta-500 rounded-sm hover:bg-neptune-500"></div>
          <span>wed</span>
        </div>
        <div className="flex flex-col justify-center items-center" /* graph container day */>
          <div /* bar */ className="w-6 h-6 bg-terracotta-500 rounded-sm hover:bg-neptune-500"></div>
          <span>thur</span>
        </div>
        <div className="flex flex-col justify-center items-center" /* graph container day */>
          <div /* bar */ className="w-6 h-4 bg-terracotta-500 rounded-sm hover:bg-neptune-500"></div>
          <span>fri</span>
        </div>
        <div className="flex flex-col justify-center items-center" /* graph container day */>
          <div /* bar */ className="w-6 h-12 bg-terracotta-500 rounded-sm hover:bg-neptune-500"></div>
          <span>sat</span>
        </div>
        <div className="flex flex-col justify-center items-center" /* graph container day */>
          <div /* bar */ className="w-6 h-16 bg-terracotta-500 rounded-sm hover:bg-neptune-500"></div>
          <span>sun</span>
        </div>
      </div>
    </div>
  );
}

export default SpentPerDay;
