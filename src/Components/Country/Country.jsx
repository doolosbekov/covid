/* -- React Core Components > Country -- */
import React, {useState, useEffect} from 'react';
import {CountryFetch} from '../../Apis';

/* -- React Core Components > Country - Material Ui Components -- */
import NativeSelect  from '@material-ui/core/NativeSelect';
import FormControl   from '@material-ui/core/FormControl';

/* -- React Core Components > Country Styles -- */
import styles from './Country.module.css';

/* -- Functional Component Declaration > Country -- */
const Country = ({handleCountrySwitch}) => {
     const [fetchedCountries, setFetchCountries] = useState([]);
     useEffect(() => {
         const FetchApis = async () => {
            setFetchCountries(await CountryFetch());
         }
         FetchApis();
     }, [setFetchCountries])
     return(
         <FormControl className = {styles.country__container}>
             <NativeSelect defaultValue = '' onChange = {(event) => handleCountrySwitch(event.target.value)}>
                 <option value = 'global'>Global</option>
                 {fetchedCountries.map((country, indx) => <option key = {indx} value = {country} >{country}</option>)}
             </NativeSelect>
         </FormControl>
     );
}


export default Country;