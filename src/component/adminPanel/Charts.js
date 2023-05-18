
import React from 'react';
import Chart from 'react-apexcharts';

const Charts = () => {
  const data = [
    {
      name: 'Streams',
      data: [90, 25, 0, 50, 60, 20, 30, 40, 50,60,70,80],
    },
    {
      name: 'Customers',
      data: [50, 0, 30, 5, 10, 70, 80, 90, 100,110,120,130],
    },
  ];

  const options = {
    chart: {
      id: 'double-line-chart',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
    },
    yaxis: {
      min: 0,
      max: 250
    }
    
  };

  return (
    <div className='container mt-5' style={{backgroundColor:'#dac9c9',borderRadius:'20px',border:'25px solid rgb(83, 71, 71)'}}>
    <div className='row'>
    <Chart options={options} series={data} type="line" height={350} width={1000} />
    </div>
    </div>
  );
};

export default Charts;
