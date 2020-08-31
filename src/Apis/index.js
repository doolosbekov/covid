/* -- Axios Core For Api's -- */
import axios from 'axios';

/* Covid Tracker Base Api */
const url = 'https://covid19.mathdro.id/api';

export const DataFetch = async (country) => {
     let dynUrl = url;
     if (country) {dynUrl = `${url}/countries/${country}`}
     try {
         const   {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(dynUrl);
         return  {confirmed, recovered, deaths, lastUpdate}
     }
     catch (error){console.log(error)}
}

export const DailyFetch = async () => {
     try {
         const   {data} = await axios.get(`${url}/daily`)
         const   modified = data.map((dailyData) => ({
             confirmed: dailyData.confirmed.total,
             deaths: dailyData.deaths.total,
             date: dailyData.reportDate,
         }));
         return modified;
     }
     catch (error){console.log(error)}
}

export const CountryFetch = async () => {
     try {
         const   {data: {countries}} = await axios.get(`${url}/countries`)
         return  countries.map((country) => country.name)
     }
     catch (error){console.log(error)}  
}