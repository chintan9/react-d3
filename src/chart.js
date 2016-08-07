import React from 'react';
import rd3 from 'rd3';
import json from './data.json';

const AreaChart = rd3.AreaChart; 
const areaData = json;

console.log(areaData);
const Chartx = React.createClass({
  render() {
    return  (
    	 <AreaChart
        data={areaData}
        width="100%"
        viewBoxObject={{
          x: 0,
          y: 0,
          height: 400,
          width: 500
        }}
        height={400}
        title="Area Chart"
        xAxisTickInterval={{unit: 'year', interval: 2}}
        xAxisLabel="Year"
        yAxisLabel="Share Price"
        xAccessor={(d)=> {
            return new Date(d[0]);
          }
        }
        yAccessor={(d)=>d[1]}
        domain={{y: [0,60]}}
      />
  )}
});


class Chart extends React.Component {  
    
  render() {
    return ( <Chartx/> );
  }
}

export default Chart;
