export const data1 = {
   labels: ['1', '2', '3', '4', '5', '6'],
   datasets: [
      {
         label: '# of Red Votes',
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: 'rgb(255, 99, 132)',
      },
      {
         label: '# of Blue Votes',
         data: [2, 3, 20, 5, 1, 4],
         backgroundColor: 'rgb(54, 162, 235)',
      },
      {
         label: '# of Green Votes',
         data: [3, 10, 13, 15, 22, 30],
         backgroundColor: 'rgb(75, 192, 192)',
      },
   ],
};

export const options1 = {
   responsive: true,
   legend: {
      position: 'top',
   },
   layout: {
      padding: {
         left: 50,
         right: 0,
         top: -40,
         bottom: 0,
      },
   },
   title: {
      display: true,
      text: 'Chart.js Bar Chart',
   },
   scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
};
