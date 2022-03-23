import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import axios from 'axios';
import { baseURL, isAuthentication } from '../../helper';
import EventBox from './EventBox';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    eventSection :{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        gap:25,
        marginTop:'20px',
        padding:'50px'
    }
}));

export default function Events() {
    const classes = useStyles();
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        fetchEventData()
    }, []);

    const fetchEventData = async () => {
        if (isAuthentication()) {
            try {
                await axios.get(baseURL + '/partyEvents', {
                    headers: {
                        'x-access-token': `${isAuthentication()}`,
                    }
                })
                    .then((res) => {
                        if (res.status === 200) {
                            setEventData(res.data)
                        }
                    })

            } catch (error) {
                console.log("err", error);
            }
        }
    }

    return (
        <Layout>
            <div className={classes.eventSection}>
                {
                    eventData && eventData.length ?
                        <>
                            {
                                eventData.map((item, index) => {
                                    return (
                                        <EventBox data={item} key={index} />
                                    )
                                })
                            }
                        </>
                        : null
                }
            </div>
        </Layout>
    )
}
