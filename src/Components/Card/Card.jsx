/* -- React Core Components > Card -- */
import React   from 'react';
import Countup from 'react-countup';

/* -- React Core Components > Card - Material Ui Components -- */
import Grid  from '@material-ui/core/Grid';
import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography  from '@material-ui/core/Typography';

/* -- React Core Components > Card - Styles -- */
import cx    from 'classnames';
import style from './Card.module.css';

/* -- Functional Component Declaration > Card -- */
const Cards = ({data}) => {
     if (!data.confirmed) {return 'Loading...'}
     return(
         <div className = {style.card__container}>
             <Grid
                 container
                 spacing = {3}
                 justify = 'center'
             >
                 <Grid
                     xs = {12}
                     md = {2}
                     item 
                     component = {Card}
                     className = {cx(style.card__grid, style.card__infected)}
                 >
                     <CardContent>
                         <Typography color = 'textSecondary' gutterBottom> Total Infected: </Typography>
                         <Typography variant = 'h6'> 
                             <Countup start = {0} end = {data.confirmed.value} duration = {2.8} separator = ',' />
                         </Typography>
                         <Typography color = 'textSecondary' gutterBottom> 
                             {new Date(data.lastUpdate).toDateString()} 
                         </Typography>
                         <Typography variant = 'body2'> DATA 3 </Typography>
                     </CardContent>
                 </Grid>
                 <Grid
                     xs = {12}
                     md = {2}               
                     item
                     component = {Card}
                     className = {cx(style.card__grid, style.card__recovered)}
                 >
                     <CardContent>
                         <Typography color = 'textSecondary' gutterBottom> Total Recovered: </Typography>
                         <Typography variant = 'h6'>
                             <Countup start = {0} end = {data.recovered.value} duration = {2.8} separator = ',' />
                         </Typography>
                         <Typography color = 'textSecondary' gutterBottom> 
                             {new Date(data.lastUpdate).toDateString()} 
                         </Typography>
                         <Typography variant = 'body2'> DATA 3 </Typography>
                     </CardContent>
                 </Grid>
                 <Grid
                     xs = {12}
                     md = {2}                 
                     item 
                     component = {Card}
                     className = {cx(style.card__grid, style.card__death)}
                 >
                     <CardContent>
                         <Typography color = 'textSecondary' gutterBottom> Total Death: </Typography>
                         <Typography variant = 'h6'>
                             <Countup start = {0} end = {data.deaths.value} duration = {2.8} separator = ',' />
                         </Typography>
                         <Typography color = 'textSecondary' gutterBottom> 
                             {new Date(data.lastUpdate).toDateString()} 
                         </Typography>
                         <Typography variant = 'body2'> DATA 3 </Typography>
                     </CardContent>
                 </Grid>                                  
             </Grid>
         </div>
     );
}

export default Cards;