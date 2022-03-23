import React from 'react'
import FackImg from '../../assets/images/fack_img.jpg'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    eventBox: {
        display: 'block',
        maxWidth: '250px',
        width: '250px',
        minWidth: '250px',
        overflow: 'hidden',
        borderRadius: 5,
        boxShadow: '1px 5px 15px 1px rgb(135 135 135 / 7%)',
        cursor: 'pointer',

        '&:hover': {
            boxShadow: '1px 5px 15px 1px rgb(135 135 135 / 50%)'
        }
    },
    imgBox: {
        display: 'flex',
        height: 150,
        flexWrap: 'wrap',
        objectFit: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        overflow: 'hidden',

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }

    },

    contentSection: {
        display: 'block',
        padding: '10px 10px 15px 10px',

        '& h1': {
            fontSize: '15px',
            margin: '0px',
            fontWeight: 600,
            lineHeight: 1.3,
            color: 'rgba(0,0,0,.7)',
            paddingBottom: '5px'
        },

        '& h5': {
            fontSize: '11px',
            margin: '0px',
            fontWeight: 500,
            color: 'rgba(0,0,0,.6)',
            letterSpacing: '1px',
            paddingBottom: '2px',
            display: 'flex',

            '& span': {
                marginLeft: 'auto'
            }
        }
    },

    brandBox: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',

        '& h6': {
            margin: '0px',
            fontSize: '12px'
        }
    },

    userLogo: {
        borderRadius: '100px',
        height: '30px',
        overflow: 'hidden',
        width: '30px',
        marginRight: '10px',

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    }
}));

export default function EventBox({ data }) {
    const classes = useStyles();
    return (
        <div className={classes.eventBox}>
            <div className={classes.imgBox}>
                <img src={data.poster_img} alt="img" />
            </div>
            <div className={classes.contentSection}>
                <h1>{data.event_name}</h1>
                <h5>{data.state}<span>{data.date}</span></h5>
                <div className={classes.brandBox}>
                    <div className={classes.userLogo}>
                        <img src={data.logo} alt="user logo" />
                    </div>
                    <h6>{data.company_name}</h6>
                </div>
            </div>
        </div>
    )
}