import { withStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import Styles from './ChartStyles';
import { data1, options1 } from './data1';

const Chart = ({ classes }) => {
   const [chartData, setChartData] = useState();

   useEffect(() => {
      let data = {
         labels: [
            'Boston',
            'Worester',
            'SpringField',
            'Lowel',
            'Cambridge',
            'New Bradford',
         ],
         datasets: [
            {
               label: 'Population',
               data: [617594, 181045, 153060, 106519, 105162, 95072],
               backgroundColor: [
                  'red',
                  'yellow',
                  'green',
                  'blue',
                  'orange',
                  'purple',
               ],

               //    borderWidth: 1,
               //    borderColor: '#777',
               //    hoverBorderColoe: '#000',
               //    hoverBorderWidth: 3,
            },
         ],
      };

      setChartData(data);
   }, []);

   return (
      <div
      // className={classes.Chart}
      >
         <Bar
            // data={chartData}
            data={data1}
            options={
               options1
               // {
               // title: {
               //    display: 'true',
               //    text: 'Largest Cities In Massachusetts',
               //    fontSize: 25,
               // },
               // legend: {
               //    display: true,
               //    position: 'right',
               // },
               //    scales: {
               //       yAxes: [
               //          {
               //             stacked: true,
               //          },
               //       ],
               //    },
               // }
            }
         />
      </div>
   );
};

export default withStyles(Styles)(Chart);
