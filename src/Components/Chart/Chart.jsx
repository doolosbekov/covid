/* -- React Core Components > Chart & Apis -- */
import React, {useState, useEffect} from 'react';
import {Line, Bar}   from 'react-chartjs-2';
import {DailyFetch}  from '../../Apis';

/* -- React Core Components > Chart Styles -- */
import styles from './Chart.module.css';

/* -- Functional Component Declaration > Chart -- */
const Chart = ({ data:{confirmed, recovered, deaths}, country }) => {
        console.log(confirmed)
     const [dailyData, setDailyData] = useState([]);
     useEffect(() => {
         const FetchApis = async () => {
             setDailyData(await DailyFetch());    
         }
         FetchApis();
     }, []);
     const LineChart = (
         dailyData.length
             ?
             ( <Line 
                 data = {{
                     labels:   dailyData.map(({date}) => date),
                     datasets: [
                         {
                             fill:   true,   
                             data:   dailyData.map(({confirmed}) => confirmed),
                             label:  'Infected',
                             borderColor:  '#3333ff'
                         }, 
                         {
                             fill:   true,   
                             data:   dailyData.map(({deaths}) => deaths),
                             label:  'Deaths',
                             borderColor:  'red',
                             backgroundColor: 'rgba(255, 0, 0, 0.6)'
                        }, 
                     ]
                 }}
             /> ) 
             : null
     )
     const BarChart = (
         confirmed
             ?
             ( <Bar 
                 data = {{
                     labels:   ['Infected', 'Recovered', 'Deaths'],
                     datasets: [
                         {
                             fill:   true,   
                             data:   [confirmed.value, recovered.value, deaths.value],
                             label:  'People',
                             backgroundColor:  [
                                 'rgba(0, 0, 250, 0.6)',
                                 'rgba(0, 250, 0, 0.6)',
                                 'rgba(250, 0, 0, 0.6)',
                             ]
                         }
                     ]
                 }}
                 options = {{
                     legend: {display: false},
                     title:  {display: true, text: `Current status for ${country}`},
                 }}
             /> ) 
             : null
     )

     return(
         <div className = {styles.chart__container}>
             {country ? BarChart : LineChart}
         </div>
     );
}


export default Chart;