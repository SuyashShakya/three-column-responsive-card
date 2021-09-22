import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        padding: 30,
        maxWidth: 250,
        minWidth: 250,
        minHeight: 420,
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            padding: 30,
            maxWidth: 255,
            minWidth: 255,
            minHeight: 400,
        },
        '&.firstBox': {
            backgroundColor: 'hsl(31, 77%, 52%)',
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
        }
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
        borderRadius: 20,
        width: 150,
        padding: 10,
        fontFamily: `Lexend Deca, sans-serif`,
        '&.firstBox': {
            color: 'hsl(31, 77%, 52%)',
            '&:hover': {
                borderColor: '#ffff',
                border: '1px solid',
                backgroundColor: 'hsl(31, 77%, 52%)',
                color: '#ffff'
            },
        },
        '&.secondBox': {
            color: 'hsl(184, 100%, 22%)',
            '&:hover': {
                borderColor: '#ffff',
                border: '1px solid',
                backgroundColor: 'hsl(184, 100%, 22%)',
                color: '#ffff'
            },
        },
        '&.thirdBox': {
            color: 'hsl(179, 100%, 13%)',
            '&:hover': {
                borderColor: '#ffff',
                border: '1px solid',
                backgroundColor: 'hsl(179, 100%, 13%)',
                color: '#ffff'
            },
        },
    },
    buttonText: {
        fontFamily: `Lexend Deca, sans-serif`,
        textTransform: 'none',
        fontWeight: 600,
    }
}))

const BoxContent = ({image, imageAlt, title, desc, boxNo}) => {
    const classes = useStyles()
    return (
        <Box className={`${classes.box} ${boxNo}`}>
            <Box flex={1}>
                <img src={image} alt={imageAlt} width={64} height={40} />
                <br /> <br />
                <Typography variant='h4' className={classes.headingText}>
                    {title}
                </Typography> 
                <br/>
                <Typography color='textSecondary' variant='subtitle2' className={classes.descriptionText}>
                    {desc}
                </Typography>  
            </Box>
            <Button variant='contained' className={`${classes.buttonStyle} ${boxNo}`}>
                <Typography variant='subtitle2' className={`${classes.buttonText} ${boxNo}`}>Learn More</Typography>
            </Button>
        </Box>    
    )
}

export default BoxContent;