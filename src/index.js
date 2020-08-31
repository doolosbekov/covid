/* -- React Core Components -- */
import React     from 'react';
import ReactDOM  from 'react-dom';

/* -- Custom Components -- */
import App from './Components/App'

/* -- Index Styles -- */
import './index.css';

ReactDOM.render(
     <React.StrictMode>
         <App />
     </React.StrictMode>,
     document.getElementById('root')
);