function GraphBar(props) {
    const {day, spent} = props;
    return ( 
        <div
          className="flex flex-col justify-center items-center" /* graph container day */
        >
          <div
            /* bar */ //className={className}
            >{spent}</div>
            
          <span>{day}</span>
        </div>
     );
}

export default GraphBar;