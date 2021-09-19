import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import BoxContent from './component/BoxContent';
import luxury from './images/icon-luxury.svg';
import sedans from './images/icon-sedans.svg';
import suvs from './images/icon-suvs.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: 50,
    height: '100vh',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      flexDirection: 'column'
    },
  }
}))

const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <BoxContent
        boxNo='firstBox' 
        image={sedans}
        imageAlt='sedans'
        title='SEDANS'
        desc='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
      />
      <BoxContent 
        boxNo='secondBox'
        image={suvs}
        imageAlt='suvs'
        title='SUVS'
        desc='Take a SUV for its spacious interior, power, and versatality. Perfect for your next family vacation and off-road adventure.'
      /> 
      <BoxContent
        boxNo='thirdBox' 
        image={luxury}
        imageAlt='luxury'
        title='LUXURY'
        desc='Cruise in the best car brands without bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
      /> 
    </Box>  
  )
}

export default App;
