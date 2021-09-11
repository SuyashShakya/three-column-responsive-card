import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
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
  },
  box: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 50,
    paddingRight: 75,
    maxWidth: 300,
    minWidth: 300,
    minHeight: 420,
    backgroundColor: 'hsl(31, 77%, 52%)' ,
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 50,
      maxWidth: 255,
      minWidth: 255,
      minHeight: 380,
    },
    '&.firstBox': {
      borderRadius: '10px 0 0 10px ',
        [theme.breakpoints.down('sm')]: {
          borderRadius: '10px 10px 0 0'
        }
    },
    '&.secondBox': {
      backgroundColor: 'hsl(184, 100%, 22%)',
    },
    '&.thirdBox': {
      backgroundColor: 'hsl(179, 100%, 13%)',
      borderRadius: '0 10px 10px 0 ',
        [theme.breakpoints.down('sm')]: {
          borderRadius: '0 0 10px 10px'
        }
    },
  },
  headingText: {
    fontFamily: `Big Shoulders Display, cursive`,
    color: 'hsl(0, 0%, 95%)'
  },
  descriptionText: {
    fontFamily: `Lexend Deca, sans-serif`,
    color: 'hsla(0, 0%, 100%, 0.75)',
    fontWeight: 400
  },
  buttonStyle: {
    borderRadius: 15,
    fontFamily: `Lexend Deca, sans-serif`,
  },
  buttonText: {
    fontFamily: `Lexend Deca, sans-serif`,
    textTransform: 'none',
    fontWeight: 600
  }
}))

const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        <Box className={`${classes.box} firstBox`}>
          <Box flex={1}>
            <img src={sedans} alt='sedans' width={64} height={40} />
            <br />
            <Typography variant='h4' className={classes.headingText}>
              SEDANS
            </Typography> 
            <br />
            <Typography color='textSecondary' variant='body2' className={classes.descriptionText}>
              Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
            </Typography>  
          </Box>
          <Button variant='contained' className={classes.buttonStyle}>
            <Typography variant='subtitle2' className={classes.buttonText}>Learn More</Typography>
          </Button>
        </Box>
        <Box className={`${classes.box} secondBox`}>
          <Box flex={1}>
            <img src={suvs} alt='suvs' width={64} height={40} />
            <br />
            <Typography variant='h4' className={classes.headingText}>
              SUVS
            </Typography> 
            <br/>
            <Typography color='textSecondary' variant='body2' className={classes.descriptionText}>
              Take a SUV for its spacious interior, power, and versatality. Perfect for your next family vacation and off-road adventure.
            </Typography>  
          </Box>
          <Button variant='contained' className={classes.buttonStyle}>
            <Typography variant='subtitle2' className={classes.buttonText}>Learn More</Typography>
          </Button>  
        </Box>
        <Box className={`${classes.box} thirdBox`}>
          <Box flex={1}>
            <img src={luxury} alt='luxury' width={64} height={40} />
            <br />
            <Typography variant='h4' className={classes.headingText}>
              LUXURY
            </Typography>
            <br /> 
            <Typography color='textSecondary' variant='body2' className={classes.descriptionText}>
              Cruise in the best car brands without bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
            </Typography>  
          </Box>
          <Button variant='contained' className={classes.buttonStyle}>
            <Typography variant='subtitle2' className={classes.buttonText}>Learn More</Typography>
          </Button>   
        </Box>
    </Box>  
  )
}

export default App;
