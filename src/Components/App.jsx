/* -- React Core Components -- */
import React, {Component} from 'react';

/* -- Custom Core Components & Application Style Module -- */
import Cards   from './Card/Card';
import Chart   from './Chart/Chart';
import Country from './Country/Country';
import Style   from './App.module.css';

/* -- Application Programming Interfaces -- */
import {DataFetch} from '../Apis';

/* -- Application Class Components -- */
class App extends Component {
     state = {
         data:     {},
         country:  ''
     }

     async componentDidMount() {
         const FetchedData = await DataFetch();
         this.setState({data: FetchedData});
     }
     handleCountrySwitch = async (country) => {
         const FetchedData = await DataFetch(country);
         this.setState({data: FetchedData, country: country});
     }

     render(){
         return(
             <div className = {Style.app}>
                 <Cards    data = {this.state.data} />
                 <Country  handleCountrySwitch = {this.handleCountrySwitch}/>
                 <Chart    data = {this.state.data} country = {this.state.country} />
             </div>  
         );
     }
}

export default App;