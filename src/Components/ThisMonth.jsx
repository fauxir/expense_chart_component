function ThisMonth() {
  return (
    <div className="h-fit w-full flex flex-col justify-center items-center mt-4">
      <div className="h-0.5 w-11/12 bg-squirrel-200"></div>
      <div className="h-fit w-full flex flex-row items-center justify-between px-4 my-3" /* container*/>
        <div className="" /* wrapper */>
          <span>Total this week</span>
          <h1 className="text-base">£10</h1>
        </div>
        <div /* wrapper saved */>
          <h1>+2.4%</h1>
          <span>total saved</span>
        </div>
      </div>
    </div>
  );
}

export default ThisMonth;
