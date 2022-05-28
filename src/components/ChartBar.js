import './ChartBar.css';
const ChartBar = (props) => {
    let barFillHeight = '0%';
  
    if (props.maxValue > 0) {
      barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
  
    return (
      <div className='chart-bar'>
        <div className='chart-bar__inner'>
          <div
            className='chart-bar__fill'
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
      </div>
    );
  };
  
  export default ChartBar;
//barHeight is in text as it is a css style.since we are passing it in style we need to pass it in quotes
//barHeight determines how much of the bar should be filled int terms of the value generated
//the value is calculated like how we calculate mode of an element.
